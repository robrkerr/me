
function scrollNext(element,finalValue,stepsRemaining,totalSteps,intervalSize) {
  element.scrollTop = finalValue - (finalValue - element.scrollTop) * stepsRemaining / totalSteps;
  if (stepsRemaining > 0) {
    setTimeout(function() { 
      scrollNext(element,finalValue,stepsRemaining-1,totalSteps,intervalSize)
    }, intervalSize);
  }
}

function animateScrollToTarget(element,target,duration) {
  var scrollToValue = target.offsetParent.offsetTop + target.offsetTop;
  var steps = Math.abs(Math.round((scrollToValue - element.scrollTop) / 20));
  if (steps > 50) { steps = 50; }
  scrollNext(element,scrollToValue,steps-1,steps,duration/steps);
}

$('document').ready(function(){
  var page = document.getElementById('scrolling');
  var target = document.getElementById("_" + window.location.hash.slice(1));
  if (target) { setTimeout(function() { animateScrollToTarget(page,target,100); }, 500); }
  $('a[href*="#"]:not([href="#"])').click(function() {
    var target = document.getElementById("_" + this.hash.slice(1));
    animateScrollToTarget(page,target,500);
  });
});
