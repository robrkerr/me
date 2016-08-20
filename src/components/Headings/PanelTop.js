import React, {Component} from 'react'
import Heading from './Heading'
import styles from './Headings.css'

export default class PanelTop extends Component {

  render() {
    const { list, colors, scrollPad } = this.props
    return <div className={styles.topPanel}>
      {
        list.map((section,i) => {
          const edge = ((i == list.length-1) && section.above) || ((i < list.length-1) && !list[i+1].above)
          return <Heading key={i} id={section.id} edge={edge} visible={section.above} colors={colors} scrollPad={scrollPad}>{section.heading}</Heading>
        })
      }
    </div>
  }
}
