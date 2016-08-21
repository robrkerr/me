import React, {Component} from 'react'
import Section from './Section'
import SkillsList from '../Misc/SkillsList'
import Link from '../Misc/Link'
import styles from './Sections.css'

const urls = {
  d3course: "http://isakiko.github.io/D3-visualising-data/"
}

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
        I love maths. Especially dealing with probabilities, differential equations and data analysis, and constructing mathematical models of real world systems. Before I got into neuroscience, I developed mathematical models of mechanical components (during my degree) and the travel patterns of people throughout an entire city (while working for Veitch Lister Consulting). I particularly enjoy thinking about how data and models are best presented or visualised. This is just as important for the person doing the analysis or modelling as it is for them to communicate what they have learnt. 
      </div>
      <div>
        On this point, I developed (along with my friend Isabell) a web development course for researchers to help them better present their findings (here are the <Link href={urls.d3course} text="course notes"/>). In addition to introducing HTML, CSS and Javascript, the course is focussed around the visualisation library D3.js. I like teaching. We’ve now taught this course numerous times. I have also always tutored or lectured university courses (and am still doing a little of this now) and teaching is generally something I find very rewarding. 
      </div>
      <div>
        I have a broad familiarity with machine learning and various data analysis techniques, including PCA, genetic algorithms,...
      </div>
      <div>
        I have also recently been learning about new machine learning techniques in natural language processing and find that a fascinating area... word2vec...
      </div>
    </Section>
  }
}
