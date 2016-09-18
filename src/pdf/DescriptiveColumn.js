import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from './Page.css'

export default class DescriptiveColumn extends Component {

  render() {
    return (
      <div className={styles.descriptiveColumn}>
        <div className={styles.section}>
          <div className={styles.sectionHeading}>
            Computational neuroscience
          </div>
          <div className={styles.sectionMain}>
            My background is in engineering and mathematics, and in applying approaches from these fields to neuroscience research. I develop mathematical models of how neurons, and networks of neurons, behave in the brain. At IBM Research, I focus on neurons in the retina, in order to develop treatments for degenerative blindness. 
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionHeading}>
            Full-stack web development
          </div>
          <div className={styles.sectionMain}>
            <div>
              I am a self-taught web developer who is now applying these skills at IBM Research to build web-enabled scientific research tools, which are visualised in a browser and powered by cloud computing and storage resources.
            </div>
            <div className={styles.newSubsection}>
              I have presented this work at international JavaScript conferences, including:
              <div className={styles.talk}>
                <b className={styles.underline}>JSConfBP:</b> Budapest (May 12, 2016)
                <div>https://www.youtube.com/watch?v=mz4N3U5f2tg</div>
              </div>
              <div className={styles.talk}>
                <b className={styles.underline}>RejectJS:</b> Berlin (Sept 24, 2015)
                <div>https://www.youtube.com/watch?v=fq2IFFK08Ik</div>
              </div>
            </div>
            <div className={styles.newSubsection}>
              As part of this work, <b className={styles.underline}>I'm currently using:</b> React, Redux/Flux, D3.js, Three.js, Node.js, PostgreSQL, CouchDB, Bash, Python, Docker, Openstack, C++ and Git.
            </div>
            <div className={styles.newSubsection}>
              <b className={styles.underline}>I've previously used:</b> Ruby on Rails and AngularJS. 
            </div>
            <div className={styles.newSubsection}>
              <b className={styles.underline}>I want to try out:</b> Mobx, GraphQL, Relay and Ansible.
            </div>

          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionHeading}>
            Community
          </div>
          <div className={styles.sectionMain}>
            I teach web development and D3.js, using course notes which I co-developed: 
            <div className={styles.talk}><b className={styles.underline}>D3.js course:</b> http://isakiko.github.io/D3-visualising-data/</div>
            I am becoming involved in organising Decompress, a community focused hack-day following CSSConfAU and JSConfAU in Nov/Dec:  
            <div className={styles.talk}><b className={styles.underline}>Decompress:</b> http://2016.decompress.com.au/</div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionHeading}>
            Other skills and interests
          </div>
          <div className={styles.sectionMain}>
            <div>
              <b className={styles.underline}>I have a lot of experience in:</b> mathematical modelling, scientific analysis, data visualisation and teaching myself new languages, technologies, and frameworks.
            </div>
            <div className={styles.newSubsection}>
              <b className={styles.underline}>I have some experience but want more in:</b> machine learning, functional programming, visual design, UX design and commerical software development.
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// Here are some of my published papers:
// <div className={styles.paper}>
//   Kerr et al. (2014) <b>Front. Neural Circuits</b>, 8:94 "Goal-directed control with cortical units that are gated by both top-down feedback and oscillatory..."
// </div>
// <div className={styles.paper}>
//   Kerr et al. (2014) <b>PLoS ONE</b>, 9(1): e87123 "Coexistence of Reward and Unsupervised Learning during the Operant Conditioning of Neural Firing..."
// </div>
// <div className={styles.paper}>
//   Kerr et al. (2013) <b>PLoS Comput Biol</b>, 9(2): e1002897 "Delay Selection by Spike-Timing-Dependent Plasticity in Recurrent Networks of Spiking..."
// </div>