import React, {Component} from 'react'
import Section from './Section'
import styles from './Sections.css'

export default class Section5 extends Component {

  render() {
    const { id, heading } = this.props.section
    const props = {...this.props, id, heading} 
    return <Section {...props}>
      <div>
        Working with good people is very important to me. These are people that you build things with, learn from, socialise with, and ideally get inspired by. 
      </div>
      <div>
        Here are some amazing people that I have worked with over the years. Please contact any of them if you would like to know more about my experience and/or what I’m like to work with.
      </div>
    </Section>
  }
}
