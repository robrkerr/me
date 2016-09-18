import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Footer from './Footer'
import DescriptiveColumn from './DescriptiveColumn'
import TimelineColumn from './TimelineColumn'
import styles from './Page.css'
import sections from '../components/Sections'

export default class Page extends Component {

  render() {
    const headerStyle = { backgroundColor: sections[0].bgColor, color: sections[0].textColor };
    const mainStyle = { color: sections[0].bgColor };
    return (
      <div className={styles.page}>
        <Header style={headerStyle}></Header>
        <div className={styles.main} style={mainStyle}>
          <DescriptiveColumn></DescriptiveColumn>
          <TimelineColumn></TimelineColumn>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}
