import React, {Component} from 'react'
import Section from './Section'
import styles from './Sections.css'

export default class Section5 extends Component {

  render() {
    const { id, heading } = this.props.section
    const props = {...this.props, id, heading} 
    return <Section {...props}>

      <div>
        people i know... some kind of visualisation for this... 
        grid of personal/professional, web/science...
      </div>

      <div>
        Photo booth migas banjo, trust fund retro kombucha deep v lo-fi tacos food truck godard humblebrag umami. Skateboard health goth try-hard, etsy schlitz mixtape pour-over messenger bag. Portland tofu flexitarian ennui, occupy beard squid locavore trust fund taxidermy. Asymmetrical gentrify neutra, cold-pressed drinking vinegar heirloom banh mi. Plaid man braid fashion axe, farm-to-table mixtape distillery ethical leggings banh mi food truck venmo gentrify narwhal taxidermy keytar. Occupy neutra banjo, pabst raw denim single-origin coffee venmo everyday carry aesthetic. Aesthetic bespoke hammock PBR&B lomo.
      </div>

    </Section>
  }
}
