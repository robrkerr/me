import React, {Component} from 'react'
import styles from './BoxList.css'

export default class ProgrammingList extends Component {

  render() {
    const sections = [{
      theme: styles.sectionGreen,
      heading: "I'm currently proficient with",
      list: ['React','d3.js','three.js','Node','SQL','Postgres','CouchDB','Python','Matlab','Docker','Git']
    }, {
      theme: styles.sectionTeal,
      heading: "I used to be proficient with",
      list: ['Ruby on Rails','Angular']
    }, {
      theme: styles.sectionBlue,
      heading: "I've somewhat worked with",
      list: ['Redux/Flux','Haskell','C++','Openstack']
    }, {
      theme: styles.sectionPurple,
      heading: "I've been wanting to try out",
      list: ['Mobx','GraphQL','Relay','Ansible']
    }]
    return <div className={styles.container}>
      { sections.map(section => {
        return (
          <div className={section.theme}>
            <div className={styles.headingBox}>
              <div className={styles.headingLine}></div>
              <div className={styles.heading}>{section.heading}</div>
              <div className={styles.headingLine}></div>
            </div>
            <div className={styles.list}>
              {
                section.list.map(item => (
                  <div className={styles.item}>
                    <div className={styles.itemInner}>{item}</div>
                  </div>
                ))
              }
            </div>
          </div>
        )
      })}
    </div>
  }
}
