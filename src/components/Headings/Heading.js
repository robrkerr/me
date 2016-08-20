import React, {Component} from 'react'
import styles from './Headings.css'

export default class Heading extends Component {

  render() {
    const { colors, children, scrollPad, visible, id, edge } = this.props
    const inlineStyles = {
      backgroundColor: colors.background, 
      width: 'calc(100% - ' + scrollPad + 'px)'
    }
    let className = visible ? styles.container : styles.containerHidden
    if (edge) className += ' ' + styles.edge
    return <div className={className} style={inlineStyles}>
      <div className={styles.heading}>
        <a href={"#" + id} style={{color: colors.highlight}}>{children}</a>
      </div>
    </div>
  }
}
