import React, {Component} from 'react'
import Section from '../Section'
import styles from '../styles.css'

export default class Section5 extends Component {

  render() {
    const { id, heading } = this.props.section
    const props = {...this.props, id, heading} 
    return <Section {...props}>

      <div>Photo booth migas banjo, trust fund retro kombucha deep v lo-fi tacos food truck godard humblebrag umami. Skateboard health goth try-hard, etsy schlitz mixtape pour-over messenger bag. Portland tofu flexitarian ennui, occupy beard squid locavore trust fund taxidermy. Asymmetrical gentrify neutra, cold-pressed drinking vinegar heirloom banh mi. Plaid man braid fashion axe, farm-to-table mixtape distillery ethical leggings banh mi food truck venmo gentrify narwhal taxidermy keytar. Occupy neutra banjo, pabst raw denim single-origin coffee venmo everyday carry aesthetic. Aesthetic bespoke hammock PBR&B lomo.</div>

      <div>Hella tacos direct trade XOXO butcher, 3 wolf moon offal truffaut helvetica four dollar toast selfies fixie cardigan tattooed keytar. Pour-over stumptown pop-up, hammock slow-carb plaid church-key street art. Beard pug whatever tattooed, authentic schlitz meggings food truck cardigan ennui normcore put a bird on it polaroid lo-fi kickstarter. Bushwick street art synth readymade cronut, banh mi neutra crucifix plaid sustainable. Blue bottle disrupt tilde, selvage 8-bit thundercats mlkshk polaroid food truck pop-up sartorial normcore aesthetic small batch photo booth. Fashion axe flannel kinfolk, wolf sriracha retro health goth distillery master cleanse poutine direct trade aesthetic. Humblebrag meggings truffaut listicle scenester celiac, iPhone small batch offal microdosing single-origin coffee dreamcatcher swag art party literally.</div>

      <div>Pop-up cardigan craft beer skateboard. Austin helvetica neutra trust fund post-ironic, synth authentic ethical. Seitan neutra jean shorts keffiyeh, DIY cornhole 8-bit artisan swag master cleanse meditation green juice godard occupy cred. Marfa wayfarers fixie cardigan shabby chic lomo. Literally tumblr bespoke pug XOXO, shoreditch 3 wolf moon echo park. Tacos humblebrag fingerstache chambray crucifix lumbersexual. Mumblecore keytar tumblr, slow-carb bespoke four loko four dollar toast.</div>

      <div>Heirloom intelligentsia readymade XOXO VHS. Bicycle rights drinking vinegar street art scenester. Wolf man bun salvia kogi. Mixtape crucifix keytar, williamsburg helvetica twee 3 wolf moon cray mlkshk deep v. Hoodie pop-up pickled biodiesel. Pinterest crucifix skateboard, scenester sartorial blog listicle before they sold out 8-bit lo-fi health goth typewriter cornhole franzen. Heirloom typewriter blue bottle chartreuse fingerstache cronut.</div>
    </Section>
  }
}
