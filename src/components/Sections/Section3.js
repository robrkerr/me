import React, {Component} from 'react'
import Section from '../Section'
import styles from '../styles.css'

export default class Section3 extends Component {

  render() {
    const { id, heading } = this.props.section
    const props = {...this.props, id, heading} 
    const { width } = this.props
    return <Section {...props}>
      <div>
        I first got into web development towards the end of my PhD by
        teaching myself Ruby on Rails. After learning the basics,
        I set myself a learning project of making a rhyming dictionary. 
        It went through a few iterations and is still available at <a target="_blank" href="http://anyrhyme.com/">anyrhyme.com</a>.
      </div>
      <div>
        Since then, I joined IBM Research and started doing web development
        as part of my job. This work has included... 
      </div>
      <div>
        I've also been lucky enough to present some of my work at international
        JavaScript conferences: RejectJS in Berlin (2015) and JSConfBP in 
        Budapest (2016). Here's the video of me giving the talk in Budapest:
      </div>
      {
        (width >= 600) ? (
          <div style={{width: 560, margin: "20px auto"}}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/mz4N3U5f2tg" frameBorder="0" allowFullScreen></iframe>
          </div>
        ) : (
          <div style={{width: 280, margin: "20px auto"}}>
            <iframe width="280" height="158" src="https://www.youtube.com/embed/mz4N3U5f2tg" frameBorder="0" allowFullScreen></iframe>
          </div>
        )
      }
      <div>
        
        
      </div>
      <div>
        What experience I want to get... and the sort of projects I enjoy..
      </div>
    </Section>
  }
}
