import React, {Component} from 'react'
import Section from './Section'
import SkillsList from '../Misc/SkillsList'
import styles from './Sections.css'

export default class Section4 extends Component {

  render() {
    const { id, heading } = this.props.section
    const props = {...this.props, id, heading} 
    return <Section {...props}>
      <div>
        And neuroscience and web development are both great for this. Neuroscience
        because it is such a complex domain with so much known and even more 
        yet to be known, and web development because the technologies and practises
        are so rapidly changing and evolving. But outside of these two fields there
        are many other things that I've invested time in and want to invest more 
        time in:
      </div>
      <SkillsList></SkillsList>
      <div>
        About... mathematical modelling, scientific analysis, transport modelling... and data visulisation...
      </div>
      <div>
        About teaching... d3js course...  
        (here are the <a target="_blank" href="http://isakiko.github.io/D3-visualising-data/">course notes</a>)
        conference organisation...
      </div>
      <div>
        About machine learning (in a natural language context), 
      </div>
      <div>
        About other things... software (functional programming... design...)
      </div>      
    </Section>
  }
}
