import React, {Component} from 'react'
import Section from './Section'
import styles from './Sections.css'
import imageStyles from '../Misc/images.css'

export default class Section2 extends Component {

  render() {
    const { id, heading } = this.props.section
    const props = {...this.props, id, heading} 
    const imageStyle = {
      backgroundColor: props.colors.background,
      color: props.colors.background
    }
    return <Section {...props}>
      <div>
        Neuroscience is something I became interested towards the end
        of my bachelors degree. I gained some experience in the field
        working as a research assistant at the Queensland Brain Institute 
        with Professor Geoff Goodhill. This helped me become more broadly
        familiar with neuroscience in general and while there I worked on 
        developing image processing scripts to extract and analyse 
        microscope images of neuron cells.  
      </div>
      <div>
        I then moved down to Melbourne to complete a PhD at the University
        of Melbourne. My PhD was in theoretical neuroscience in the 
        Department of Electrical and Electronic Engineering. I was 
        supervised by Anthony Burkitt, David Grayden, and Doreen Thomas.
      </div>
      <div>
        My project was in developing mathematical models of how the 
        connection strengths between neurons changes due to their activity 
        and investigating how structure could emerge in networks of these 
        neurons. Ultimately, I was interested in understanding how networks 
        of neurons could be encoding information and how this could affect 
        the way in which they manipulating information flowing through them. 
      </div>
      <div className={imageStyles.neuron} style={imageStyle}>
        <div style={imageStyle}></div>
      </div>
      <div>
        After my PhD, I joined IBM Research Australia, where I transitioned 
        into doing a mix of <a href={"#web"}>web development</a> and 
        neuroscience research. The focus of my neuroscience research changed
        at this point towards more detailed, single cell modelling (as shown 
        in the animation above). I use this type of modelling to understand
        the behaviour of neuron cells in the retina in order to develop 
        treatments for degenerative blindness and in the cortex to better 
        understand certain types of epilepsy.  
      </div>
      <div>
        Why I like neuroscience research... and research in general...
      </div>
      <div>
        A list of my published papers can be found <a target="_blank" href="https://scholar.google.com.au/citations?user=ptV_Nz0AAAAJ&hl=en&oi=sra">here</a>
      </div>
    </Section>
  }
}
