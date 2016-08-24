import React, {Component} from 'react'
import Section from './Section'
import ProgrammingList from '../Misc/ProgrammingList'
import Link from '../Misc/Link'
import { urls } from '../../utils'
import styles from './Sections.css'
import imageStyles from '../Misc/images.css'

export default class Section3 extends Component {

  render() {
    const { id, heading } = this.props.section
    const props = {...this.props, id, heading} 
    const { width } = this.props
    return <Section {...props}>
      <div>
        I am somewhat new to web development but I have quickly gained a lot of experience prototyping ideas and building quite involved systems. However, I have worked on these projects predominately by myself and would really like to get experience working as part of a team on a larger project.  
      </div>
      <div>
        I first got into web development towards the end of my PhD by teaching myself Ruby on Rails. To properly cement my understanding, I decided to build an online rhyming dictionary. After a few iterations, through which I learnt about databases, HTTP requests, AngularJS, CSS and phonetics, I had built something I was happy with and that you can still check out at <Link text="anyrhyme.com" href={urls.anyrhyme}/>.
      </div>
      <div>
        Since joining IBM Research, web development has become part of my job. This has been largely focused around developing a browser and cloud-based tool for performing and visualising simulations of neurons. This tool gives researchers a rich, visual interface for them to explore their models, provides them with cloud-based resources for data storage and computation, and allows them to seamlessly share and publish their results in a way others can easily view and reproduce. 
      </div>
      <div className={imageStyles.scienceWrapper}>
        <div className={imageStyles.science}></div>
        <p>Sketch courtsey of <Link text="filtercake" href="http://webgram.co/p/8At_6ztmn6"/></p>
      </div>
      <div>
        I’ve been lucky enough to present some of this work at a JavaScript conferences in Berlin (RejectJS 2015) and Budapest (JSConfBP 2016). Here's the video of my talk in Budapest:
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
        In building this and other related tools, I have started thinking a lot about how best to manage simulations and analysis in the cloud, where they often support, or are exposed through, web applications. Often these involve large amounts of data and the problem of dynamically filtering and summarising this data to allow a user to explore it all while constrained by limited bandwidth and memory is really interesting to me. 
      </div>
      <div>
        Here are some different languages, frameworks, libraries and technologies that I am familiar with or would like to try out: 
      </div>
      <ProgrammingList></ProgrammingList>
      <div>
        I’ve also started to get involved in conference organisation, helping out with <Link text="CSSConfAU" href={urls.cssConfAU}/> and <Link text="JSConfAU" href={urls.jsConfAU}/>, and being one of the organisers of the connected event <Link text="Decompress" href={urls.decompress}/>. For the CFP this year, the team decided to do things a bit different (as <Link text="described by Glen Maddern" href={urls.cfpBlog}/>) and, as part of this, I built the talk description component of the <Link text="form" href={urls.cfpCode}/> that allowed people to anonymise their own talk submissions. We got really positive feedback on the form. Here's an animation of how it worked:
      </div>
      <div className={imageStyles.cfpWrapper}>
        <div className={imageStyles.cfp}></div>
      </div>
      <div>
        CSSConfAU, JSConfAU, and Decompress are all happening at the end of this year (Nov-Dec 2016). If you're interested in sponsoring any of these (especially Decompress) or want to be involved, you should get in contact with me and the team at <Link text="team@decompress.com.au" href={urls.decompressEmail}/>!
      </div>
    </Section>
  }
}
