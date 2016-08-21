import React, {Component} from 'react'
import Section from './Section'
import Link from '../Misc/Link'
import styles from './Sections.css'
import imageStyles from '../Misc/images.css'

const urls = {
  googleScholar: "https://scholar.google.com.au/citations?user=ptV_Nz0AAAAJ&hl=en&oi=sra",
  geoff: "http://www.qbi.uq.edu.au/professor-geoffrey-goodhill"
}

export default class Section2 extends Component {

  render() {
    const { id, heading } = this.props.section
    const props = {...this.props, id, heading} 
    const inlineImageStyles = {backgroundColor: props.colors.background}
    return <Section {...props}>
      <div>
        <Link text="Here" href={urls.googleScholar}/> is a list of my published papers.
      </div>
      <div>
        It was sometime during my undergraduate studies that I got the opportunity to apply my technical skills to an area that had always fascinated me: understanding the brain. My introduction to the field was working as a research assistant at the Queensland Brain Institute with <Link text="Professor Geoff Goodhill" href={urls.geoff}/>, where I worked on using image processing to extract and analyse microscope images of neurons. 
      </div>
      <div>
        After this, I moved down to Melbourne for a PhD in computational neuroscience at the University of Melbourne. Over my PhD, I worked on developing mathematical models of how networks of neurons could learn and store information within the input activity they receive through incremental adjustments to the strength of their connections. Ultimately, I was interested in understanding how networks of neurons developed their structure, learn new patterns, and function as mediums for encoding, transmitting and manipulating information in the brain. I worked on this project in the Department of Electrical and Electronic Engineering, supervised by Professor Anthony Burkitt, Professor David Grayden, and Professor Doreen Thomas, and working alongside people trying to restore vision by electrically stimulated the retina, predict epileptic seizures from brain activity, and develop better strategies for cochlear implants.
      </div>
      <div>
        After my PhD, I joined IBM Research Australia as a Postdoctoral Researcher, where I transitioned into doing a mix of web development and neuroscience research. At this point, my neuroscience research changed focus to more detailed, single cell modelling (as shown in the animation below). I use this type of model to understand the behaviour of neuron cells in the retina in order to develop treatments for degenerative blindness and in the cortex to better understand certain types of epilepsy. This involves correctly incorporating experimental results into mathematical models and carefully validating that model produces outputs that are in line with other experimental data. I am now a Research Staff Member charged with directing the neural modelling work within the lab and I am supervising a number of researchers both at IBM and at the University of Melbourne.  
      </div>
      <div className={imageStyles.neuronWrapper}>
        <div className={imageStyles.neuron} style={inlineImageStyles}></div>
      </div>
      <div>
        I enjoy neuroscience research and research in general because of the focus on thinking carefully but creatively about interesting problems. Research involves complex ideas that need to be communicated accurately and tested precisely. Details matter but so does a high-level understanding of how they integrate together. I consider myself very good at organising complex concepts and systems in my mind, communicating them effectively, and making sure that I have all the important details correct. 
      </div>
    </Section>
  }
}
