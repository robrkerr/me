import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TopHeadings from './Headings/PanelTop'
import BottomHeadings from './Headings/PanelBottom'
import styles from './App.css'
import imageStyles from './Misc/images.css'
import sectionStyles from './Sections/Sections.css'
import sections from './Sections'
import { getColors, getMargins, getSectionList, getPageScroll } from '../utils'

const topPanelStyle = {
  paddingTop: 'calc(100vh - ' + (sections.length*2 + 20) + 'rem)'
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.updateScroll = this.updateScroll.bind(this)
    this.updateHeadingPositions = this.updateHeadingPositions.bind(this)
    this.updateHeadings = this.updateHeadings.bind(this)
    const positions = sections.map(() => 'below')
    const sectionList = getSectionList(sections,positions)
    this.state = {
      scroll: {top: 0, bottom: 0},
      margins: {top: 0, bottom: 0},
      positions: positions,
      sectionList: sectionList,
      colors: getColors(sectionList),
      width: document.getElementById("app").getBoundingClientRect().width,
      rowHeight: 0,
      scrollPad: 0
    }
  }

  componentDidMount() {
    const component = this
    setTimeout(function() {
      const firstHeading = document.getElementsByClassName(sectionStyles.sectionHeading)[0]
      const rowHeight = firstHeading.getBoundingClientRect().height
      const scrollable = document.getElementsByClassName(styles.container)[0]
      const scrollPad = scrollable.offsetWidth - scrollable.clientWidth
      component.setState({
        rowHeight: rowHeight, 
        scrollPad: scrollPad
      })
    }, 500)
    window.addEventListener('scroll', component.updateScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll')
  }

  updateScroll(event) {
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
  }

  updateHeadingPositions(index, newPosition) {
    const newPositions = this.state.positions.map((p,i) => {
      return (i==index) ? newPosition : p
    })
    this.updateHeadings(newPositions)
  }

  updateHeadings(newPositions) {
    const positions = newPositions || this.state.positions
    const margins = getMargins(positions, this.state.rowHeight)
    const sectionList = getSectionList(sections,positions)
    const colors = getColors(sectionList)
    this.setState({margins, positions, colors, sectionList})
  }

  render() {
    const { sectionList, margins, scroll, positions, colors, width, rowHeight } = this.state
    document.documentElement.style['background-color'] = colors.docBackground
    const inlineStyleMain = {backgroundColor: colors.background, color: colors.text}
    return (
      <div>
        <div className={styles.container} style={inlineStyleMain}>
          <div className={styles.topPanel} style={topPanelStyle}>
            <div className={imageStyles.face}><div></div></div>
          </div>
          {
            sections.map((section,i) => {
              const props = {
                key: i,
                index: i, 
                section: section,
                scroll: scroll, 
                margins: margins, 
                positions: positions,
                rowHeight: rowHeight,
                onEnterExit: this.updateHeadingPositions,
                colors: colors,
                width: width
              }
              const Element = section.content
              return <Element {...props} />
            })
          }   
        </div>
        <TopHeadings list={sectionList} scrollPad={this.state.scrollPad} colors={colors} />
        <BottomHeadings list={sectionList} scrollPad={this.state.scrollPad} colors={colors} />
      </div>
    )
  }
}
