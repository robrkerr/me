import React, {Component} from 'react'
import styles from './BoxList.css'

export default class SkillsList extends Component {

  render() {
    const sections = [{
      theme: styles.sectionGreen,
      heading: "I have a lot of experience with",
      list: ['Mathematical Modelling','Data Visualisation','Scientific Analysis','Teaching','Speaking']
    }, {
      theme: styles.sectionTeal,
      heading: "I have some experience with",
      list: ['Machine Learning','Functional Programming']
    }, {
      theme: styles.sectionPurple,
      heading: "I'd like to learn about",
      list: ['Natural Language Processing','Aesthetic Design']
    }]
    return <div className={styles.container}>
      { sections.map((section,i) => {
        return (
          <div key={i} className={section.theme}>
            <div className={styles.headingBox}>
              <div className={styles.headingLine}></div>
              <div className={styles.heading}>{section.heading}</div>
              <div className={styles.headingLine}></div>
            </div>
            <div className={styles.list}>
              {
                section.list.map((item,j) => (
                  <div key={j} className={styles.itemWide}>
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
