import React, {Component} from 'react'
import Section from '../Section'
import styles from '../styles.css'

export default class Section2 extends Component {

  render() {
    const { id, heading } = this.props.section
    const props = {...this.props, id, heading} 
    const { imageStyle } = this.props
    return <Section {...props}>
      <div>
        Neuroscience is something I became interested towards the end
        of my bachelors degree. I gained some experience in the field
        working as a research assistant at the Queensland Brain Institute 
        with Professor Geoff Goodhill. In addition to becoming more broadly
        familiar with neuroscience research, I worked on developing image 
        processing scripts to extract and analyse microscope images of neuron
        cells.  
      </div>
      <div>
        I then moved down to Melbourne to complete a PhD at the University
        of Melbourne. My PhD was in developing mathematical models of how 
        networks of neurons...
      </div>
      <div className={styles.neuronBox} style={imageStyle}><div className={styles.neuron}></div></div>

      <div>I am currently a Research Staff Member at IBM Research Australia.</div>
      <div>A list of my published papers can be found <a target="_blank" href="https://scholar.google.com.au/citations?user=ptV_Nz0AAAAJ&hl=en&oi=sra">here</a></div>
    </Section>
  }
}
