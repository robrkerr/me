import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Section from './Section'
import Headings from './Headings'

const sections = [
  'Hispter 1',
  'Hispter 2',
  'Hispter 3'
]

export default class App extends Component {
  constructor(props) {
    super(props)
    this.updateScroll = this.updateScroll.bind(this)
    this.state = {
      scroll: {top: 0, bottom: 0},
      margins: {top: 0, bottom: 0},
      positions: sections.map(() => 'below')
    }
  }

  componentDidMount() {
    const component = this
    document.getElementById("scrolling").addEventListener('scroll', this.updateScroll)
  }

  componentWillUnmount() {
    document.getElementById("scrolling").removeEventListener('scroll')
  }

  updateScroll(event,newPositions) {
    const element = ReactDOM.findDOMNode(this)
    const rowHeight = 60
    const positions = newPositions || this.state.positions
    const topHeadingHeight = positions.filter(p => p == 'above').length * rowHeight
    const bottomHeadingHeight = positions.filter(p => p == 'below').length * rowHeight
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
    const aboveSections = sections.filter((s,i) => (this.state.positions[i] == 'above'))
    const belowSections = sections.filter((s,i) => (this.state.positions[i] == 'below'))
    return (
      <div className="main">
        <div id="scrolling" className="scrolling-container">
          <div className="scrolling-container-inner">
            <Section index={0} heading={sections[0]} scroll={this.state.scroll} margins={this.state.margins} position={this.state.positions[0]} onEnterExit={onEnterExit}>
              Pop-up cardigan craft beer skateboard. Austin helvetica neutra trust fund post-ironic, synth authentic ethical. Seitan neutra jean shorts keffiyeh, DIY cornhole 8-bit artisan swag master cleanse meditation green juice godard occupy cred. Marfa wayfarers fixie cardigan shabby chic lomo. Literally tumblr bespoke pug XOXO, shoreditch 3 wolf moon echo park. Tacos humblebrag fingerstache chambray crucifix lumbersexual. Mumblecore keytar tumblr, slow-carb bespoke four loko four dollar toast.

              Photo booth migas banjo, trust fund retro kombucha deep v lo-fi tacos food truck godard humblebrag umami. Skateboard health goth try-hard, etsy schlitz mixtape pour-over messenger bag. Portland tofu flexitarian ennui, occupy beard squid locavore trust fund taxidermy. Asymmetrical gentrify neutra, cold-pressed drinking vinegar heirloom banh mi. Plaid man braid fashion axe, farm-to-table mixtape distillery ethical leggings banh mi food truck venmo gentrify narwhal taxidermy keytar. Occupy neutra banjo, pabst raw denim single-origin coffee venmo everyday carry aesthetic. Aesthetic bespoke hammock PBR&B lomo.

              Hella tacos direct trade XOXO butcher, 3 wolf moon offal truffaut helvetica four dollar toast selfies fixie cardigan tattooed keytar. Pour-over stumptown pop-up, hammock slow-carb plaid church-key street art. Beard pug whatever tattooed, authentic schlitz meggings food truck cardigan ennui normcore put a bird on it polaroid lo-fi kickstarter. Bushwick street art synth readymade cronut, banh mi neutra crucifix plaid sustainable. Blue bottle disrupt tilde, selvage 8-bit thundercats mlkshk polaroid food truck pop-up sartorial normcore aesthetic small batch photo booth. Fashion axe flannel kinfolk, wolf sriracha retro health goth distillery master cleanse poutine direct trade aesthetic. Humblebrag meggings truffaut listicle scenester celiac, iPhone small batch offal microdosing single-origin coffee dreamcatcher swag art party literally.

              Heirloom intelligentsia readymade XOXO VHS. Bicycle rights drinking vinegar street art scenester. Wolf man bun salvia kogi. Mixtape crucifix keytar, williamsburg helvetica twee 3 wolf moon cray mlkshk deep v. Hoodie pop-up pickled biodiesel. Pinterest crucifix skateboard, scenester sartorial blog listicle before they sold out 8-bit lo-fi health goth typewriter cornhole franzen. Heirloom typewriter blue bottle chartreuse fingerstache cronut.
            </Section>
            <Section index={1} heading={sections[1]} scroll={this.state.scroll} margins={this.state.margins} position={this.state.positions[1]} onEnterExit={onEnterExit}>
              Pop-up cardigan craft beer skateboard. Austin helvetica neutra trust fund post-ironic, synth authentic ethical. Seitan neutra jean shorts keffiyeh, DIY cornhole 8-bit artisan swag master cleanse meditation green juice godard occupy cred. Marfa wayfarers fixie cardigan shabby chic lomo. Literally tumblr bespoke pug XOXO, shoreditch 3 wolf moon echo park. Tacos humblebrag fingerstache chambray crucifix lumbersexual. Mumblecore keytar tumblr, slow-carb bespoke four loko four dollar toast.

              Photo booth migas banjo, trust fund retro kombucha deep v lo-fi tacos food truck godard humblebrag umami. Skateboard health goth try-hard, etsy schlitz mixtape pour-over messenger bag. Portland tofu flexitarian ennui, occupy beard squid locavore trust fund taxidermy. Asymmetrical gentrify neutra, cold-pressed drinking vinegar heirloom banh mi. Plaid man braid fashion axe, farm-to-table mixtape distillery ethical leggings banh mi food truck venmo gentrify narwhal taxidermy keytar. Occupy neutra banjo, pabst raw denim single-origin coffee venmo everyday carry aesthetic. Aesthetic bespoke hammock PBR&B lomo.

              Hella tacos direct trade XOXO butcher, 3 wolf moon offal truffaut helvetica four dollar toast selfies fixie cardigan tattooed keytar. Pour-over stumptown pop-up, hammock slow-carb plaid church-key street art. Beard pug whatever tattooed, authentic schlitz meggings food truck cardigan ennui normcore put a bird on it polaroid lo-fi kickstarter. Bushwick street art synth readymade cronut, banh mi neutra crucifix plaid sustainable. Blue bottle disrupt tilde, selvage 8-bit thundercats mlkshk polaroid food truck pop-up sartorial normcore aesthetic small batch photo booth. Fashion axe flannel kinfolk, wolf sriracha retro health goth distillery master cleanse poutine direct trade aesthetic. Humblebrag meggings truffaut listicle scenester celiac, iPhone small batch offal microdosing single-origin coffee dreamcatcher swag art party literally.

              Heirloom intelligentsia readymade XOXO VHS. Bicycle rights drinking vinegar street art scenester. Wolf man bun salvia kogi. Mixtape crucifix keytar, williamsburg helvetica twee 3 wolf moon cray mlkshk deep v. Hoodie pop-up pickled biodiesel. Pinterest crucifix skateboard, scenester sartorial blog listicle before they sold out 8-bit lo-fi health goth typewriter cornhole franzen. Heirloom typewriter blue bottle chartreuse fingerstache cronut.
            </Section>
            <Section index={2} heading={sections[2]} scroll={this.state.scroll} margins={this.state.margins} position={this.state.positions[2]} onEnterExit={onEnterExit}>
              Pop-up cardigan craft beer skateboard. Austin helvetica neutra trust fund post-ironic, synth authentic ethical. Seitan neutra jean shorts keffiyeh, DIY cornhole 8-bit artisan swag master cleanse meditation green juice godard occupy cred. Marfa wayfarers fixie cardigan shabby chic lomo. Literally tumblr bespoke pug XOXO, shoreditch 3 wolf moon echo park. Tacos humblebrag fingerstache chambray crucifix lumbersexual. Mumblecore keytar tumblr, slow-carb bespoke four loko four dollar toast.

              Photo booth migas banjo, trust fund retro kombucha deep v lo-fi tacos food truck godard humblebrag umami. Skateboard health goth try-hard, etsy schlitz mixtape pour-over messenger bag. Portland tofu flexitarian ennui, occupy beard squid locavore trust fund taxidermy. Asymmetrical gentrify neutra, cold-pressed drinking vinegar heirloom banh mi. Plaid man braid fashion axe, farm-to-table mixtape distillery ethical leggings banh mi food truck venmo gentrify narwhal taxidermy keytar. Occupy neutra banjo, pabst raw denim single-origin coffee venmo everyday carry aesthetic. Aesthetic bespoke hammock PBR&B lomo.

              Hella tacos direct trade XOXO butcher, 3 wolf moon offal truffaut helvetica four dollar toast selfies fixie cardigan tattooed keytar. Pour-over stumptown pop-up, hammock slow-carb plaid church-key street art. Beard pug whatever tattooed, authentic schlitz meggings food truck cardigan ennui normcore put a bird on it polaroid lo-fi kickstarter. Bushwick street art synth readymade cronut, banh mi neutra crucifix plaid sustainable. Blue bottle disrupt tilde, selvage 8-bit thundercats mlkshk polaroid food truck pop-up sartorial normcore aesthetic small batch photo booth. Fashion axe flannel kinfolk, wolf sriracha retro health goth distillery master cleanse poutine direct trade aesthetic. Humblebrag meggings truffaut listicle scenester celiac, iPhone small batch offal microdosing single-origin coffee dreamcatcher swag art party literally.

              Heirloom intelligentsia readymade XOXO VHS. Bicycle rights drinking vinegar street art scenester. Wolf man bun salvia kogi. Mixtape crucifix keytar, williamsburg helvetica twee 3 wolf moon cray mlkshk deep v. Hoodie pop-up pickled biodiesel. Pinterest crucifix skateboard, scenester sartorial blog listicle before they sold out 8-bit lo-fi health goth typewriter cornhole franzen. Heirloom typewriter blue bottle chartreuse fingerstache cronut.
            </Section>
          </div>
        </div>
        <div id="floating" className="floating-container">
          <div className="floating-container-inner">
            <Headings type="top" list={aboveSections} />
            <Headings type="bottom" list={belowSections} />
          </div>
        </div>
      </div>
    );
  }
}
