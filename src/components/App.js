import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Section from './Section'
import Headings from './Headings'

const sections = [
  {id: 'contact', heading: 'My name is Robert Kerr'},
  {id: 'neuroscience', heading: 'I am a computational neuroscientist', bgColor: '#2e2633', color: '#dfdfdf' },
  {id: 'web', heading: 'And more recently a web developer', bgColor: '#fdf2fb' },
  {id: 'viz', heading: 'I enjoy finding new ways to convey ideas' },
  {id: 'references', heading: 'I have people who can vouch for me' }
]

export default class App extends Component {
  constructor(props) {
    super(props)
    this.updateScroll = this.updateScroll.bind(this)
    this.state = {
      scroll: {top: 0, bottom: 0},
      margins: {top: 0, bottom: 0},
      positions: sections.map(() => 'below'),
      width: document.getElementById("app").offsetWidth,
      rowHeight: 0
    }
  }

  componentDidMount() {
    const component = this
    setTimeout(function() {
      const headingRowHeight = document.getElementsByClassName("section-heading")[0].offsetHeight
      component.setState({rowHeight: headingRowHeight})
    }, 500)
    document.getElementById("scrolling").addEventListener('scroll', this.updateScroll)
  }

  componentWillUnmount() {
    document.getElementById("scrolling").removeEventListener('scroll')
  }

  updateScroll(event,newPositions) {
    const positions = newPositions || this.state.positions
    const topHeadingHeight = positions.filter(p => p == 'above').length * this.state.rowHeight
    const bottomHeadingHeight = positions.filter(p => p == 'below').length * this.state.rowHeight
    const margins = {
      top: topHeadingHeight,
      bottom: bottomHeadingHeight
    }
    if (event) {
      this.setState({
        scroll: {
          top: event.target.scrollTop,
          bottom: event.target.scrollTop + event.target.offsetHeight
        },
        margins: margins
      })
    } else {
      this.setState({
        margins: margins,
        positions: newPositions
      })
    }
  }

  render() {
    const onEnterExit = (index,newPosition) => {
      this.updateScroll(undefined,this.state.positions.map((p,i) => (i==index) ? newPosition : p))
      // console.log(index + ' ' + newPosition)
    }
    const sectionList = sections.map((s,i) => ({...s, 
      above: this.state.positions[i] == 'above',
      below: this.state.positions[i] == 'below'
    }))
    const aboveSections = sectionList.filter(s => s.above)
    // const belowSections = sections.filter((s,i) => (this.state.positions[i] == 'below'))
    // const currentSection = sections.filter((s,i) => (this.state.positions[i] == 'within'))[0]
    const currentSection = aboveSections[aboveSections.length-1]
    const currentBgColor = currentSection ? currentSection.bgColor : undefined
    const currentColor = currentSection ? currentSection.color : undefined
    return (
      <div className="main">
        <div id="scrolling" className="scrolling-container" style={{backgroundColor: currentBgColor || 'white', color: currentColor}}>
          <div className="scrolling-container-inner">
            <div className="face-box">
              <div className="face"></div>
            </div>
            <Section index={0} sections={sectionList} scroll={this.state.scroll} margins={this.state.margins} positions={this.state.positions} rowHeight={this.state.rowHeight} onEnterExit={onEnterExit}>
              <p>I live in Melbourne (Australia) but I am originally from Brisbane.</p>
              <p>My current address is 5/214 Argyle Street, Fitzroy 3065</p>
              <p>You can contact me by email at robrkerr@gmail.com</p>
              <p>Or by phone on (+61) 431 587 997</p>
              <p>You can also find me on twitter (@robrkerr) and GitHub (<a target="_blank" href="https://github.com/robrkerr">robrkerr</a>)</p>
              <p>I have an undergraduate dual-degree in Mechanical Engineering and Mathematics from the University of Queensland (2005-2009). </p>
              <p>During this time I also completed a number of work experience postings, including: </p>
            </Section>
            <Section index={1} sections={sectionList} scroll={this.state.scroll} margins={this.state.margins} positions={this.state.positions} rowHeight={this.state.rowHeight} onEnterExit={onEnterExit}>
              <p>I am currently a Research Staff Member at IBM Research Australia.</p>
              <p>Undergraduate degree in Mechanical Engineering and Mathematics at the University of Queensland. </p>
              <p>I moved to Melbourne to do a PhD in computational neuroscience... published papers... </p>
              <p>A list of my published papers can be found <a target="_blank" href="https://scholar.google.com.au/citations?user=ptV_Nz0AAAAJ&hl=en&oi=sra">here</a></p>
            </Section>
            <Section index={2} sections={sectionList} scroll={this.state.scroll} margins={this.state.margins} positions={this.state.positions} rowHeight={this.state.rowHeight} onEnterExit={onEnterExit}>
              Pop-up cardigan craft beer skateboard. Austin helvetica neutra trust fund post-ironic, synth authentic ethical. Seitan neutra jean shorts keffiyeh, DIY cornhole 8-bit artisan swag master cleanse meditation green juice godard occupy cred. Marfa wayfarers fixie cardigan shabby chic lomo. Literally tumblr bespoke pug XOXO, shoreditch 3 wolf moon echo park. Tacos humblebrag fingerstache chambray crucifix lumbersexual. Mumblecore keytar tumblr, slow-carb bespoke four loko four dollar toast.

              Photo booth migas banjo, trust fund retro kombucha deep v lo-fi tacos food truck godard humblebrag umami. Skateboard health goth try-hard, etsy schlitz mixtape pour-over messenger bag. Portland tofu flexitarian ennui, occupy beard squid locavore trust fund taxidermy. Asymmetrical gentrify neutra, cold-pressed drinking vinegar heirloom banh mi. Plaid man braid fashion axe, farm-to-table mixtape distillery ethical leggings banh mi food truck venmo gentrify narwhal taxidermy keytar. Occupy neutra banjo, pabst raw denim single-origin coffee venmo everyday carry aesthetic. Aesthetic bespoke hammock PBR&B lomo.

              Hella tacos direct trade XOXO butcher, 3 wolf moon offal truffaut helvetica four dollar toast selfies fixie cardigan tattooed keytar. Pour-over stumptown pop-up, hammock slow-carb plaid church-key street art. Beard pug whatever tattooed, authentic schlitz meggings food truck cardigan ennui normcore put a bird on it polaroid lo-fi kickstarter. Bushwick street art synth readymade cronut, banh mi neutra crucifix plaid sustainable. Blue bottle disrupt tilde, selvage 8-bit thundercats mlkshk polaroid food truck pop-up sartorial normcore aesthetic small batch photo booth. Fashion axe flannel kinfolk, wolf sriracha retro health goth distillery master cleanse poutine direct trade aesthetic. Humblebrag meggings truffaut listicle scenester celiac, iPhone small batch offal microdosing single-origin coffee dreamcatcher swag art party literally.

              {
                (this.state.width >= 600) ? (
                  <div style={{width: 560, margin: "20px auto"}}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/mz4N3U5f2tg" frameBorder="0" allowFullScreen></iframe>
                  </div>
                ) : (
                  <div style={{width: 280, margin: "20px auto"}}>
                    <iframe width="280" height="158" src="https://www.youtube.com/embed/mz4N3U5f2tg" frameBorder="0" allowFullScreen></iframe>
                  </div>
                )
              }

              Heirloom intelligentsia readymade XOXO VHS. Bicycle rights drinking vinegar street art scenester. Wolf man bun salvia kogi. Mixtape crucifix keytar, williamsburg helvetica twee 3 wolf moon cray mlkshk deep v. Hoodie pop-up pickled biodiesel. Pinterest crucifix skateboard, scenester sartorial blog listicle before they sold out 8-bit lo-fi health goth typewriter cornhole franzen. Heirloom typewriter blue bottle chartreuse fingerstache cronut.
            </Section>
            <Section index={3} sections={sectionList} scroll={this.state.scroll} margins={this.state.margins} positions={this.state.positions} rowHeight={this.state.rowHeight} onEnterExit={onEnterExit}>
              Pop-up cardigan craft beer skateboard. Austin helvetica neutra trust fund post-ironic, synth authentic ethical. Seitan neutra jean shorts keffiyeh, DIY cornhole 8-bit artisan swag master cleanse meditation green juice godard occupy cred. Marfa wayfarers fixie cardigan shabby chic lomo. Literally tumblr bespoke pug XOXO, shoreditch 3 wolf moon echo park. Tacos humblebrag fingerstache chambray crucifix lumbersexual. Mumblecore keytar tumblr, slow-carb bespoke four loko four dollar toast.

              Heirloom intelligentsia readymade XOXO VHS. Bicycle rights drinking vinegar street art scenester. Wolf man bun salvia kogi. Mixtape crucifix keytar, williamsburg helvetica twee 3 wolf moon cray mlkshk deep v. Hoodie pop-up pickled biodiesel. Pinterest crucifix skateboard, scenester sartorial blog listicle before they sold out 8-bit lo-fi health goth typewriter cornhole franzen. Heirloom typewriter blue bottle chartreuse fingerstache cronut.
            </Section>
            <Section index={4} sections={sectionList} scroll={this.state.scroll} margins={this.state.margins} positions={this.state.positions} rowHeight={this.state.rowHeight} onEnterExit={onEnterExit}>
              Pop-up cardigan craft beer skateboard. Austin helvetica neutra trust fund post-ironic, synth authentic ethical. Seitan neutra jean shorts keffiyeh, DIY cornhole 8-bit artisan swag master cleanse meditation green juice godard occupy cred. Marfa wayfarers fixie cardigan shabby chic lomo. Literally tumblr bespoke pug XOXO, shoreditch 3 wolf moon echo park. Tacos humblebrag fingerstache chambray crucifix lumbersexual. Mumblecore keytar tumblr, slow-carb bespoke four loko four dollar toast.

              Photo booth migas banjo, trust fund retro kombucha deep v lo-fi tacos food truck godard humblebrag umami. Skateboard health goth try-hard, etsy schlitz mixtape pour-over messenger bag. Portland tofu flexitarian ennui, occupy beard squid locavore trust fund taxidermy. Asymmetrical gentrify neutra, cold-pressed drinking vinegar heirloom banh mi. Plaid man braid fashion axe, farm-to-table mixtape distillery ethical leggings banh mi food truck venmo gentrify narwhal taxidermy keytar. Occupy neutra banjo, pabst raw denim single-origin coffee venmo everyday carry aesthetic. Aesthetic bespoke hammock PBR&B lomo.

              Hella tacos direct trade XOXO butcher, 3 wolf moon offal truffaut helvetica four dollar toast selfies fixie cardigan tattooed keytar. Pour-over stumptown pop-up, hammock slow-carb plaid church-key street art. Beard pug whatever tattooed, authentic schlitz meggings food truck cardigan ennui normcore put a bird on it polaroid lo-fi kickstarter. Bushwick street art synth readymade cronut, banh mi neutra crucifix plaid sustainable. Blue bottle disrupt tilde, selvage 8-bit thundercats mlkshk polaroid food truck pop-up sartorial normcore aesthetic small batch photo booth. Fashion axe flannel kinfolk, wolf sriracha retro health goth distillery master cleanse poutine direct trade aesthetic. Humblebrag meggings truffaut listicle scenester celiac, iPhone small batch offal microdosing single-origin coffee dreamcatcher swag art party literally.

              Heirloom intelligentsia readymade XOXO VHS. Bicycle rights drinking vinegar street art scenester. Wolf man bun salvia kogi. Mixtape crucifix keytar, williamsburg helvetica twee 3 wolf moon cray mlkshk deep v. Hoodie pop-up pickled biodiesel. Pinterest crucifix skateboard, scenester sartorial blog listicle before they sold out 8-bit lo-fi health goth typewriter cornhole franzen. Heirloom typewriter blue bottle chartreuse fingerstache cronut.
            </Section>
          </div>
        </div>
        <div id="floating" className="floating-container">
          <div className="floating-container-inner">
            <Headings type="top" list={sectionList} color={currentColor} bgColor={currentBgColor} />
            <Headings type="bottom" list={sectionList} color={currentColor} bgColor={currentBgColor} />
          </div>
        </div>
      </div>
    );
  }
}
