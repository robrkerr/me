import React, {Component} from 'react'
import Section from './Section'
import ProgrammingList from '../Misc/ProgrammingList'
import Link from '../Misc/Link'
import styles from './Sections.css'
import imageStyles from '../Misc/images.css'

const urls = {
  anyrhyme: "http://anyrhyme.com/",
  cssConfAU: "http://2016.cssconf.com.au/",
  jsConfAU: "http://2016.jsconfau.com/",
  decompress: "http://2016.decompress.com.au/",
  cfpBlog: "http://2016.jsconfau.com/2016/07/01/cfp.html#anonymised-description-field",
  cfpCode: "https://github.com/robrkerr/smart-proposals"
}

export default class Section3 extends Component {

  render() {
    const { id, heading } = this.props.section
    const props = {...this.props, id, heading} 
    const { width } = this.props
    return <Section {...props}>
      <div>
        I first got into web development towards the end of my PhD by teaching myself Ruby on Rails. To properly cement my understanding, I decided to build an online rhyming dictionary. After a few iterations, through which I learnt about databases, phonetics, AngularJS and CSS, I’d built something I was happy with that you can still find online at <Link text="anyrhyme.com" href={urls.anyrhyme}/>.
      </div>
      <div>
        Since then, I joined IBM Research and started doing web development as part of my job. This work has included... 
      </div>
      <div>
        I've also been lucky enough to present some of my work at international JavaScript conferences: RejectJS in Berlin (2015) and JSConfBP in Budapest (2016). Here's the video of me giving the talk in Budapest:
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
        I have a lot of experience prototyping ideas, learning different frameworks and developing mostly by myself. What I still really want is to get experience working on a project as part of a team. The project could be anything but ideally I'd like to be building something involving analytics and/or data visualisation. 
      </div>
      <div>
        Here are some different languages, frameworks, libraries and technologies that I am familiar with or would like to try out: 
      </div>
      <ProgrammingList></ProgrammingList>
      <div>
        I’ve also started to get involved in conference organisation, helping out with <Link text="CSSConfAU" href={urls.cssConfAU}/> and <Link text="JSConfAU" href={urls.jsConfAU}/>, and being one of the organisers of the connected event <Link text="Decompress" href={urls.decompress}/>. For the CFP this year, the team decided to do things a bit different (as <Link text="described by Glen Maddern" href={urls.cfpBlog}/>) and, as part of this, I built the talk description component of the <Link text="form" href={urls.cfpCode}/> that allowed people to anonymise their own talk submissions. We got really positive feedback on the form. Here's an animation of how it worked:
      </div>
      <div className={imageStyles.cfp}><div></div></div>
    </Section>
  }
}
