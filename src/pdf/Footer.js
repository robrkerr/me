import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from './Page.css'

export default class Footer extends Component {

  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.referenceNote}>
          References available on request
        </div>
      </div>
    )
  }
}
