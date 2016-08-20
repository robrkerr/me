import React, {Component} from 'react'
import Heading from './Heading'
import styles from './Headings.css'

export default class PanelBottom extends Component {

  render() {
    const { list, colors, scrollPad } = this.props
    return <div className={styles.bottomPanel}>
      {
        list.map((section,i) => {
          const edge = ((i == 0) && section.below) || ((i > 0) && !list[i-1].below)
          return <Heading key={i} id={section.id} edge={edge} visible={section.below} colors={colors} scrollPad={scrollPad}>{section.heading}</Heading>
        })
      }
    </div>
  }
}
