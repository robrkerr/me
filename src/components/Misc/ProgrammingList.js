import React, {Component} from 'react'
import styles from './ProgrammingList.css'

export default class ProgrammingList extends Component {

  render() {
    const proficient = ['React','Git','NodeJS','Python','d3','threejs','SQL','Postgres','Docker','CouchDB'];
    const previous = ['Ruby on Rails','AngularJS'];
    const somewhat = ['Redux/Flux','Haskell','C++'];
    const toLearn = ['Mobx','GraphQL','Relay'];
    return <div className={styles.container}>
      <div className={styles.sectionCurrent}>
        <div className={styles.sectionLead}>
          <div className={styles.sectionLine}></div>
          <div className={styles.sectionHeading}>I'm currently proficient with</div>
          <div className={styles.sectionLine}></div>
        </div>
        <div className={styles.sectionList}>
          {
            proficient.map(item => (
              <div className={styles.sectionItem}>
                <div className={styles.sectionItemInner}>{item}</div>
              </div>
            ))
          }
        </div>
      </div>
      <div className={styles.sectionPrevious}>
        <div className={styles.sectionLead}>
          <div className={styles.sectionLine}></div>
          <div className={styles.sectionHeading}>I used to be proficient with</div>
          <div className={styles.sectionLine}></div>
        </div>
        <div className={styles.sectionList}>
          {
            previous.map(item => (
              <div className={styles.sectionItem}>
                <div className={styles.sectionItemInner}>{item}</div>
              </div>
            ))
          }
        </div>
      </div>
      <div className={styles.sectionSome}>
        <div className={styles.sectionLead}>
          <div className={styles.sectionLine}></div>
          <div className={styles.sectionHeading}>I've somewhat worked with</div>
          <div className={styles.sectionLine}></div>
        </div>
        <div className={styles.sectionList}>
          {
            somewhat.map(item => (
              <div className={styles.sectionItem}>
                <div className={styles.sectionItemInner}>{item}</div>
              </div>
            ))
          }
        </div>
      </div>
      <div className={styles.sectionLearn}>
        <div className={styles.sectionLead}>
          <div className={styles.sectionLine}></div>
          <div className={styles.sectionHeading}>I've been wanting to learn</div>
          <div className={styles.sectionLine}></div>
        </div>
        <div className={styles.sectionList}>
          {
            toLearn.map(item => (
              <div className={styles.sectionItem}>
                <div className={styles.sectionItemInner}>{item}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  }
}
