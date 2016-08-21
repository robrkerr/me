
export function getPageScroll() {
  if (window.pageYOffset != undefined) {
    return pageYOffset;
  } else {
    return document.documentElement.scrollTop || document.body.scrollTop || 0;
  }
}

export function getMargins(positions, rowHeight) {
  const numTopHeadings = positions.filter(p => p == 'above').length
  const topHeadingHeight = numTopHeadings * rowHeight
  const numBottomHeadings = positions.filter(p => p == 'below').length
  const bottomHeadingHeight = (numBottomHeadings + 1.2/2.6) * rowHeight
  return {
    top: topHeadingHeight,
    bottom: bottomHeadingHeight
  }
}

export function getSectionList(sections,positions) {
  return sections.map((s,i) => ({...s, 
    above: positions[i] == 'above',
    below: positions[i] == 'below'
  }))
}

export function getColors(sectionList) {
  const aboveSections = sectionList.filter(s => s.above)
  const withinSections = sectionList.filter(s => !s.above && !s.below)
  const belowSections = sectionList.filter(s => s.below)
  const anyAbove = aboveSections.length > 0
  const lastAbove = aboveSections[aboveSections.length-1]
  const firstWithinOrBelow = withinSections[0] || belowSections[0]
  const currentSection = lastAbove || firstWithinOrBelow
  return {
    background: currentSection.bgColor,
    text: currentSection.textColor,
    highlight: currentSection.highlightColor,
    docBackground: anyAbove ? currentSection.bgColor : "hsl(40,100%,98%)"
  }
}
