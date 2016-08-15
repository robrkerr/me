import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'
import Section3 from './Sections/Section3'
import Section4 from './Sections/Section4'
import Section5 from './Sections/Section5'
import Headings from './Headings'
import styles from './styles.css'

const sections = [
  {
    id: 'contact', 
    heading: 'My name is Robert Kerr', 
    bgColor: '#191e2b', 
    textColor: '#dfdfdf',
    highlightColor: 'hsl(42,100%,95%)',
    content: Section1
  },
  {
    id: 'neuroscience', 
    heading: 'I am a computational neuroscientist', 
    bgColor: '#1d2121', //'hsl(236,10%,15%)', //'#070b15', 
    textColor: '#dfdfdf',
    highlightColor: '#9cf29c',
    content: Section2
  },
  {
    id: 'web', 
    heading: 'And more recently a web developer', 
    bgColor: '#041a1a', 
    textColor: '#dfdfdf',
    // highlightColor: '#b4fdfd',
    content: Section3
  },
  {
    id: 'learning', 
    heading: 'I enjoy learning new things', 
    bgColor: '#151019', 
    textColor: '#dfdfdf',
    // highlightColor: '#e6c6ff',
    content: Section4
  },
  {
    id: 'people', 
    heading: 'And working with good people', 
    bgColor: '#0f1c21',// '#18292c', 
    textColor: '#dfdfdf',
    // highlightColor: 'limegreen',
    content: Section5
  }
]

function getPageScroll() {
  if (window.pageYOffset != undefined) {
    return pageYOffset;
  } else {
    return document.documentElement.scrollTop || document.body.scrollTop || 0;
  }
}

function getMargins(positions, rowHeight) {
  const numTopHeadings = positions.filter(p => p == 'above').length
  const topHeadingHeight = numTopHeadings * rowHeight
  const numBottomHeadings = positions.filter(p => p == 'below').length
  const bottomHeadingHeight = (numBottomHeadings + 1.6/2.6) * rowHeight
  return {
    top: topHeadingHeight,
    bottom: bottomHeadingHeight
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.updateScroll = this.updateScroll.bind(this)
    this.state = {
      scroll: {top: 0, bottom: 0},
      margins: {top: 0, bottom: 0},
      positions: sections.map(() => 'below'),
      width: document.getElementById("app").getBoundingClientRect().width,
      rowHeight: 0,
      scrollPad: 0
    }
  }

  componentDidMount() {
    const component = this
    setTimeout(function() {
      const headingRowHeight = document.getElementsByClassName(styles.sectionHeading)[0].getBoundingClientRect().height
      const scrollable = document.getElementsByClassName(styles.scrollingContainerInner)[0]
      const scrollPad = scrollable.offsetWidth - scrollable.clientWidth
      component.setState({
        rowHeight: headingRowHeight, 
        scrollPad: scrollPad
      })
    }, 500)
    window.addEventListener('scroll', this.updateScroll, {passive: true})
  }

  componentWillUnmount() {
    window.removeEventListener('scroll')
  }

  updateScroll(event,newPositions) {
    if (newPositions == undefined) {
      var pageScroll = getPageScroll();
      if (this.state.scroll.top !== pageScroll) {
        const margins = getMargins(this.state.positions, this.state.rowHeight);
        this.setState({
          scroll: {
            top: pageScroll,
            bottom: pageScroll + window.innerHeight
          },
          margins: margins
        })
      }
    } else {
      const margins = getMargins(newPositions, this.state.rowHeight)
      this.setState({
        margins: margins,
        positions: newPositions
      })
    }
  }

  render() {
    const onEnterExit = (index,newPosition) => {
      this.updateScroll(undefined,this.state.positions.map((p,i) => (i==index) ? newPosition : p))
      // console.log(index + ' ' + newPosition)
    }
    const sectionList = sections.map((s,i) => ({...s, 
      above: this.state.positions[i] == 'above',
      below: this.state.positions[i] == 'below'
    }))
    const aboveSections = sectionList.filter(s => s.above)
    const withinSections = sectionList.filter(s => !s.above && !s.below)
    const belowSections = sectionList.filter(s => s.below)
    const currentSection = aboveSections[aboveSections.length-1] || withinSections[0] || belowSections[0]
    const currentBgColor = currentSection.bgColor
    const currentTextColor = currentSection.textColor
    const currentHighlightColor = currentSection.highlightColor
    const mainStyle = {backgroundColor: currentBgColor, color: currentTextColor}
    const imageStyle = {backgroundColor: currentBgColor, color: currentBgColor}
    const highlightStyle = {color: currentHighlightColor}
    document.documentElement.style['background-color'] = (aboveSections.length > 0) ? currentBgColor : "hsl(40,100%,98%)";
    const componentState = this.state
    return (
      <div>
        <div className={styles.scrollingContainerInner} style={mainStyle}>
          <div className={styles.topPanel}>
            <div className={styles.faceBox}><div className={styles.face}></div></div>
          </div>
          {
            sectionList.map((section,i) => {
              const props = {
                key: i,
                index: i, 
                section: section, 
                scroll: componentState.scroll, 
                margins: componentState.margins, 
                positions: componentState.positions,
                rowHeight: componentState.rowHeight,
                onEnterExit: onEnterExit,
                imageStyle: imageStyle,
                highlightStyle: highlightStyle,
                mainStyle: mainStyle,
                width: componentState.width
              }
              const Element = section.content
              return <Element {...props} />
            })
          }          
        </div>
        <Headings type="Top" list={sectionList} scrollPad={this.state.scrollPad} color={currentHighlightColor} bgColor={currentBgColor} />
        <Headings type="Bottom" list={sectionList} scrollPad={this.state.scrollPad} color={currentHighlightColor} bgColor={currentBgColor} />
      </div>
    );
  }
}
