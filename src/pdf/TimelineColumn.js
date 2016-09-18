import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from './Page.css'

export default class TimelineColumn extends Component {

  render() {
    return (
      <div className={styles.timelineColumn}>
        <div className={styles.timeline}>
          <div className={styles.leftTimeline}>
            <div className={styles.timelineItem} style={{top: "0%", height: "35%"}}></div>
            <div className={styles.timelineItem} style={{top: "40%", height: "35%"}}></div>
          </div>
          <div className={styles.rightTimeline}>
            <div className={styles.timelineItem} style={{top: "15%", height: "14%"}}></div>
            <div className={styles.timelineItem} style={{top: "30%", height: "10%"}}></div>
            <div className={styles.timelineItem} style={{top: "75%", height: "18%"}}></div>
            <div className={styles.timelineItem} style={{top: "93.5%", height: "10%"}}></div>
          </div>
        </div>
        <div className={styles.experience}>
          <div className={styles.experienceItem} style={{top: "2%"}}>
            <div className={styles.experienceItemHeading}>
              <span className={styles.itemYears}>02/05 - 11/09</span>
              Dual Bachleor Degree 
            </div>
            <div className={styles.itemPlace}>
              University of Queensland
            </div>
            <div className={styles.itemDetails}>
              Mechanical Engineering and Mathematics
            </div>
            <div className={styles.itemDetails}>
              <b className={styles.underline}>GPA:</b> 6.98 (1 is lowest, 7 is highest)       
            </div>
          </div>
          <div className={styles.experienceItem} style={{top: "16%"}}>
            <div className={styles.experienceItemHeading}>
              <span className={styles.itemYears}>03/07 - 05/09</span>
              Student Engineer
            </div>
            <div className={styles.itemPlace}>
              Veitch Lister Consulting
            </div>
            <div className={styles.itemDetails}>
              Developed new capabilities for in-house, city-wide, transportation forecasting software
            </div>
          </div>
          <div className={styles.experienceItem} style={{top: "30%"}}>
            <div className={styles.experienceItemHeading}>
              <span className={styles.itemYears}>06/09 - 06/10</span>
              Research Assistant
            </div>
            <div className={styles.itemPlace}>
              Queensland Brain Institute
            </div>
            <div className={styles.itemDetails}>
              Analysed microscope images of neurons during development
            </div>
          </div>
          <div className={styles.experienceItem} style={{top: "42%"}}>
            <div className={styles.experienceItemHeading}>
              <span className={styles.itemYears}>07/10 - 01/14</span>
              PhD Candidate
            </div>
            <div className={styles.itemPlace}>
              University of Melbourne, Department of Electrical & Electronic Engineering
            </div>
            <div className={styles.itemDetails}>
              Computational Neuroscience
            </div>
            <div className={styles.itemDetails}>
              <b className={styles.underline}>Title:</b> "Mathematical Modelling of Brain Networks: From Synaptic Plasticity to Behaviour"
            </div>
            <div className={styles.itemDetails}>
              <b className={styles.underline}>Supervisors:</b> Prof. Anthony N. Burkitt, Prof. David B. Grayden, Prof. Doreen A. Thomas
            </div>
          </div>
          <div className={styles.experienceItem} style={{top: "72%"}}>
            <div className={styles.experienceItemHeading}>
              <span className={styles.itemYears}>02/14 - 01/16</span>
              Postdoctoral Researcher
            </div>
            <div className={styles.itemPlace}>
              IBM Research Australia
            </div>
            <div className={styles.itemDetails}>
              Collaborating with university researchers on projects around the bionic eye, retinal degeneration, and epilepsy 
            </div>
          </div>
          <div className={styles.experienceItem} style={{top: "89%"}}>
            <div className={styles.experienceItemHeading}>
              <span className={styles.itemYears}>02/16 - now</span>
              Research Staff Member
            </div>
            <div className={styles.itemPlace}>
              IBM Research Australia
            </div>
            <div className={styles.itemDetails}>
              Leading the neural modelling research and demonstrating how web technologies can transform scientific research 
            </div>
          </div>
        </div>
      </div>
    )
  }
}
