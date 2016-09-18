import React, {Component} from 'react'
import Section from './Section'
import Timeline from '../Misc/Timeline'
import Link from '../Misc/Link'
import { urls } from '../../utils'
import styles from './Sections.css'

export default class Section1 extends Component {

  render() {
    const { id, heading } = this.props.section
    const props = {...this.props, id, heading} 
    return <Section {...props}>
      {
        <div>And this is my story.</div>
        // <div>And I'm looking for interesting work in web development and/or data visualisation.</div>
      }
      <div>
        Just want a regular, printable cv? <Link text="Here you go." href="/cv.pdf"/>
      </div>
      <div>
        I am a scientific researcher who lives in Melbourne (Australia) and has recently transitioned into web development. I like programming, maths, technology, and interesting problems, but I’m particularly interested in how data and ideas are visualised and presented. This website is a reflection of that and was an opportunity for me to improve and demonstrate my skills in building things for the web. 
      </div>
      <div className={styles.newSubSection}>
        You can contact me by email or phone, and find me on Twitter and GitHub:
      </div>
      <div>
        <span className={styles.sectionHighlight}>
          <span className={styles.sectionFieldLabel}>Email: </span>
          <span className={styles.sectionFieldValue}><Link text="robrkerr@gmail.com" href={urls.email}/></span>
        </span>
        <span className={styles.sectionHighlight}>
          <span className={styles.sectionFieldLabel}>Phone: </span>
          <span className={styles.sectionFieldValue}>(+61) 431 587 997</span>
        </span>
        <span className={styles.sectionHighlight}>
          <span className={styles.sectionFieldLabel}>Twitter: </span>
          <span className={styles.sectionFieldValue}><Link text="@robrkerr" href={urls.twitter}/></span>
        </span>
        <span className={styles.sectionHighlight}>
          <span className={styles.sectionFieldLabel}>GitHub: </span>
          <span className={styles.sectionFieldValue}><Link text="@robrkerr" href={urls.github}/></span>
        </span>
      </div>
      <div className={styles.newSubSection}>
        Here's a timeline of my study and employment history:
      </div>
      <Timeline></Timeline>
    </Section>
  }
}
