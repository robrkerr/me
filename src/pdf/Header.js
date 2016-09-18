import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from './Page.css'

export default class Header extends Component {

  render() {
    return (
      <div className={styles.header} style={this.props.style}>
        <div className={styles.headerTop}>
          <div className={styles.name}>Robert Kerr</div>
          <div className={styles.website}>
            <a href="https://robkerr.surge.sh">https://robkerr.surge.sh</a>
          </div>
        </div>
        <div className={styles.headerLeft}>
          <div className={styles.tldr}>
            I am a scientific researcher who has recently transitioned into web development. I enjoy programming, maths, technology, and interesting problems, but I’m particularly interested in how data and ideas are visualised and presented. 
          </div>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.headerDetail}>
            robrkerr@gmail.com
          </div>
          <div className={styles.headerDetail}>
            +614 31 587 997
          </div>
          <div className={styles.headerDetail}>
            Melbourne, Australia
          </div>
        </div>
      </div>
    )
  }
}


