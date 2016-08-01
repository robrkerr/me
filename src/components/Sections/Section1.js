import React, {Component} from 'react'
import Section from '../Section'
import * as d3 from 'd3'
import styles from '../styles.css'

const yearScale = d3.scaleLinear().domain([2004.75, 2016.5]).range([0, 100*11.75])
const timeScale = d3.scaleLinear().domain([0, 1]).range([0, 100])

export default class Section1 extends Component {

  render() {
    const { id, heading } = this.props.section
    const props = {...this.props, id, heading} 
    return <Section {...props}>
      <div>
        And this is my story.
      </div>
      <div>
        Just want a regular, printable cv? <a target="_blank" href="/cv.pdf">Here you go.</a>
      </div>
      <div>
        I am a scientific researcher who lives in Melbourne (Australia) 
        and has recently transitioned into web development. I'm particularly 
        interested in how data and ideas are visualised and presented. This 
        website is a reflection of that and was an opportunity for me to improve 
        and demonstrate my skills in building things for the web. 
      </div>
      <div className={styles.newSubSection}>
        You can contact me by email or phone, and find me on Twitter and GitHub:
      </div>
      <div>
        <span className={styles.sectionHighlight}>
          <span className={styles.sectionFieldLabel}>Address: </span>
          <span className={styles.sectionFieldValue}>5/214 Argyle Street, Fitzroy 3065</span>
        </span>
        <span className={styles.sectionHighlight}>
          <span className={styles.sectionFieldLabel}>Email: </span>
          <span className={styles.sectionFieldValue}>robrkerr@gmail.com</span>
        </span>
        <span className={styles.sectionHighlight}>
          <span className={styles.sectionFieldLabel}>Phone: </span>
          <span className={styles.sectionFieldValue}>(+61) 431 587 997</span>
        </span>
        <span className={styles.sectionHighlight}>
          <span className={styles.sectionFieldLabel}>Twitter: </span>
          <span className={styles.sectionFieldValue}>@robrkerr</span>
        </span>
        <span className={styles.sectionHighlight}>
          <span className={styles.sectionFieldLabel}>GitHub: </span>
          <span className={styles.sectionFieldValue}>@robrkerr</span>
        </span>
      </div>
      <div className={styles.newSubSection}>
        Here's a timeline of my study and employment history:
      </div>
      <div className={styles.timeline}>
        <div className={styles.studyTimeline}>
          <div style={{top: yearScale(2005.2), height: timeScale(4.8)}} className={styles.timelineItem}>
            <div className={styles.studyTimelineItemBg}></div>
            <div className={styles.timelineItemInner}>
              <div>Dual Bachelor in Mechanical Engineering and Mathematics</div>
              <div><b>University of Queensland</b></div>
            </div>
          </div>
          <div style={{top: yearScale(2010.55), height: timeScale(3.5)}} className={styles.timelineItem}>
            <div className={styles.studyTimelineItemBg}></div>
            <div className={styles.timelineItemInner}>
              <div>PhD in Computational Neuroscience</div>
              <div><b>University of Melbourne</b></div>
            </div>
          </div>
        </div>
        <div className={styles.timelineDivider}>
          <div style={{height: 20}} className={styles.timelineDividerLine}></div>
          <div className={styles.timelineDividerYear}>2005</div>
          <div style={{height: 80}} className={styles.timelineDividerLine}></div>
          <div className={styles.timelineDividerYear}>2006</div>
          <div style={{height: 80}} className={styles.timelineDividerLine}></div>
          <div className={styles.timelineDividerYear}>2007</div>
          <div style={{height: 80}} className={styles.timelineDividerLine}></div>
          <div className={styles.timelineDividerYear}>2008</div>
          <div style={{height: 80}} className={styles.timelineDividerLine}></div>
          <div className={styles.timelineDividerYear}>2009</div>
          <div style={{height: 80}} className={styles.timelineDividerLine}></div>
          <div className={styles.timelineDividerYear}>2010</div>
          <div style={{height: 80}} className={styles.timelineDividerLine}></div>
          <div className={styles.timelineDividerYear}>2011</div>
          <div style={{height: 80}} className={styles.timelineDividerLine}></div>
          <div className={styles.timelineDividerYear}>2012</div>
          <div style={{height: 80}} className={styles.timelineDividerLine}></div>
          <div className={styles.timelineDividerYear}>2013</div>
          <div style={{height: 80}} className={styles.timelineDividerLine}></div>
          <div className={styles.timelineDividerYear}>2014</div>
          <div style={{height: 80}} className={styles.timelineDividerLine}></div>
          <div className={styles.timelineDividerYear}>2015</div>
          <div style={{height: 80}} className={styles.timelineDividerLine}></div>
          <div className={styles.timelineDividerYear}>2016</div>
          <div style={{height: 40}} className={styles.timelineDividerLine}></div>
        </div>
        <div className={styles.workTimeline}>
          <div style={{top: yearScale(2005.9), height: timeScale(0.3)}} className={styles.timelineItem}>
            <div className={styles.studyTimelineItemBg}></div>
            <div className={styles.timelineItemInner}>
              Vacation job
            </div>
          </div>
          <div style={{top: yearScale(2006.9), height: timeScale(0.3)}} className={styles.timelineItem}>
            <div className={styles.studyTimelineItemBg}></div>
            <div className={styles.timelineItemInner}>
              Vacation job
            </div>
          </div>
          <div style={{top: yearScale(2007.3), height: timeScale(2.1)}} className={styles.timelineItem}>
            <div className={styles.studyTimelineItemBg}></div>
            <div className={styles.timelineItemInner}>
              <div>Part-time</div>
              <div><b>Veitch Lister Consulting</b></div>
            </div>
          </div>
          <div style={{top: yearScale(2009.5), height: timeScale(1)}} className={styles.timelineItem}>
            <div className={styles.workTimelineItemBg}></div>
            <div className={styles.timelineItemInner}>
              <div>Research Assistant</div>
              <div><b>Queensland Brain Institute</b></div>
            </div>
          </div>
          <div style={{top: yearScale(2014.2), height: timeScale(2.4)}} className={styles.timelineItem}>
            <div className={styles.workTimelineItemBg}></div>
            <div className={styles.timelineItemInner}>
              <div>Research Staff Member</div>
              <div><b>IBM Research Australia</b></div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  }
}
