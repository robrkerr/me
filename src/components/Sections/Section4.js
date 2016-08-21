import React, {Component} from 'react'
import Section from './Section'
import SkillsList from '../Misc/SkillsList'
import Link from '../Misc/Link'
import { urls } from '../../utils'
import styles from './Sections.css'

export default class Section4 extends Component {

  render() {
    const { id, heading } = this.props.section
    const props = {...this.props, id, heading} 
    return <Section {...props}>
      <div>
        And neuroscience and web development are both great for this. Neuroscience because of its complex subject matter where there is so much known but even more to discover, and web development because the technologies and practises are changing and evolving so rapidly. But there are many other things outside of these two fields that have caught my imagination and that I either invested a lot of time in, want to learn more about, or both:
      </div>
      <SkillsList></SkillsList>
      <div>
        I love maths. Especially dealing with probabilities, differential equations and data analysis, and constructing mathematical models of real world systems. Before I got into neuroscience, I developed mathematical models of mechanical components (during my degree) and the travel patterns of people throughout an entire city (while working for Veitch Lister Consulting). I particularly enjoy thinking about how data and models are best presented and/or visualised. This is just as important for the person doing the analysis or modelling as it is for them to communicate what they have learnt. 
      </div>
      <div>
        On this point, I developed (along with my friend Isabell) a web development course for researchers to help them better present their findings (here are the <Link href={urls.d3course} text="course notes"/>). In addition to introducing HTML, CSS and Javascript, the course is focussed around the visualisation library D3.js. We’ve now taught this course numerous times. I have also always tutored or lectured university courses (and am still doing a little of this now) and teaching is generally something I find very rewarding. 
      </div>
      <div>
        I'm excited by machine learning and data analysis, and have a broad familiarity with various techniques, such as linear regression, PCA, genetic algorithms, and clustering. I have also recently been learning about new machine learning techniques being developed for <Link text="AlphaGo" href={urls.alphaGo}/> (deep learning mixed with Monte Carlo tree search) and in natural language processing (word embeddings like word2vec) and find these to be fascinating areas. 
      </div>
      <div style={{marginTop: '2.4rem'}}>
        Anyway that's me. Get in contact if you'd like to chat:
      </div>
      <div>
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
      <div>
        And finally, <Link text="here's" href={urls.meRepo}/> the code behind this page if you're interested.  
      </div>
    </Section>
  }
}
