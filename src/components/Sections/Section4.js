import React, {Component} from 'react'
import Section from '../Section'
import styles from '../styles.css'

export default class Section4 extends Component {

  render() {
    const { id, heading } = this.props.section
    const props = {...this.props, id, heading} 
    return <Section {...props}>
      Pop-up cardigan craft beer skateboard. Austin helvetica neutra trust fund post-ironic, synth authentic ethical. Seitan neutra jean shorts keffiyeh, DIY cornhole 8-bit artisan swag master cleanse meditation green juice godard occupy cred. Marfa wayfarers fixie cardigan shabby chic lomo. Literally tumblr bespoke pug XOXO, shoreditch 3 wolf moon echo park. Tacos humblebrag fingerstache chambray crucifix lumbersexual. Mumblecore keytar tumblr, slow-carb bespoke four loko four dollar toast.

      Heirloom intelligentsia readymade XOXO VHS. Bicycle rights drinking vinegar street art scenester. Wolf man bun salvia kogi. Mixtape crucifix keytar, williamsburg helvetica twee 3 wolf moon cray mlkshk deep v. Hoodie pop-up pickled biodiesel. Pinterest crucifix skateboard, scenester sartorial blog listicle before they sold out 8-bit lo-fi health goth typewriter cornhole franzen. Heirloom typewriter blue bottle chartreuse fingerstache cronut.
    </Section>
  }
}
