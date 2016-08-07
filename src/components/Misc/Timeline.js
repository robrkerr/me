import React, {Component} from 'react'
import * as d3 from 'd3'
import styles from './Timeline.css'

const yearScale = d3.scaleLinear().domain([2004.75, 2016.5]).range([0, 100*11.75])
const timeScale = d3.scaleLinear().domain([0, 1]).range([0, 100])

export default class Timeline extends Component {

  render() {
    return <div className={styles.container}>
      <div className={styles.leftColumn}>
        <div style={{top: yearScale(2005.2), height: timeScale(4.8)}} className={styles.item}>
          <div className={styles.itemBg}></div>
          <div className={styles.itemInner}>
            <div>Dual Bachelor in Mechanical Engineering and Mathematics</div>
            <div><b>University of Queensland</b></div>
          </div>
        </div>
        <div style={{top: yearScale(2010.55), height: timeScale(3.5)}} className={styles.item}>
          <div className={styles.itemBg}></div>
          <div className={styles.itemInner}>
            <div>PhD in Computational Neuroscience</div>
            <div><b>University of Melbourne</b></div>
          </div>
        </div>
      </div>
      <div className={styles.divider}>
        <div style={{height: 20}} className={styles.dividerLine}></div>
        <div className={styles.dividerYear}>2005</div>
        <div style={{height: 80}} className={styles.dividerLine}></div>
        <div className={styles.dividerYear}>2006</div>
        <div style={{height: 80}} className={styles.dividerLine}></div>
        <div className={styles.dividerYear}>2007</div>
        <div style={{height: 80}} className={styles.dividerLine}></div>
        <div className={styles.dividerYear}>2008</div>
        <div style={{height: 80}} className={styles.dividerLine}></div>
        <div className={styles.dividerYear}>2009</div>
        <div style={{height: 80}} className={styles.dividerLine}></div>
        <div className={styles.dividerYear}>2010</div>
        <div style={{height: 80}} className={styles.dividerLine}></div>
        <div className={styles.dividerYear}>2011</div>
        <div style={{height: 80}} className={styles.dividerLine}></div>
        <div className={styles.dividerYear}>2012</div>
        <div style={{height: 80}} className={styles.dividerLine}></div>
        <div className={styles.dividerYear}>2013</div>
        <div style={{height: 80}} className={styles.dividerLine}></div>
        <div className={styles.dividerYear}>2014</div>
        <div style={{height: 80}} className={styles.dividerLine}></div>
        <div className={styles.dividerYear}>2015</div>
        <div style={{height: 80}} className={styles.dividerLine}></div>
        <div className={styles.dividerYear}>2016</div>
        <div style={{height: 40}} className={styles.dividerLine}></div>
      </div>
      <div className={styles.rightColumn}>
        <div style={{top: yearScale(2005.9), height: timeScale(0.3)}} className={styles.item}>
          <div className={styles.itemBg}></div>
          <div className={styles.itemInner}>
            Vacation job
          </div>
        </div>
        <div style={{top: yearScale(2006.9), height: timeScale(0.3)}} className={styles.item}>
          <div className={styles.itemBg}></div>
          <div className={styles.itemInner}>
            Vacation job
          </div>
        </div>
        <div style={{top: yearScale(2007.3), height: timeScale(2.1)}} className={styles.item}>
          <div className={styles.itemBg}></div>
          <div className={styles.itemInner}>
            <div>Part-time</div>
            <div><b>Veitch Lister Consulting</b></div>
          </div>
        </div>
        <div style={{top: yearScale(2009.5), height: timeScale(1)}} className={styles.item}>
          <div className={styles.itemBg}></div>
          <div className={styles.itemInner}>
            <div>Research Assistant</div>
            <div><b>Queensland Brain Institute</b></div>
          </div>
        </div>
        <div style={{top: yearScale(2014.2), height: timeScale(2.4)}} className={styles.item}>
          <div className={styles.itemBg}></div>
          <div className={styles.itemInner}>
            <div>Research Staff Member</div>
            <div><b>IBM Research Australia</b></div>
          </div>
        </div>
      </div>
    </div>
  }
}
