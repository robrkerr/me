import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.css'

export default class Section extends Component {

	componentWillUpdate(props) {
		const position = props.positions[props.index]
		const element = ReactDOM.findDOMNode(this)
    const height = props.rowHeight
    const offsetTop = element.offsetTop
    if ((position != 'above') && (props.scroll.top + props.margins.top > offsetTop)) { 
    	props.onEnterExit(props.index,'above') 
    }
    if ((position == 'above') && (props.scroll.top + props.margins.top < offsetTop + height)) { 
    	props.onEnterExit(props.index,'within') 
    }
    if ((position != 'below') && (props.scroll.bottom - props.margins.bottom < offsetTop + height)) { 
    	props.onEnterExit(props.index,'below') 
    }
    if ((position == 'below') && (props.scroll.bottom - props.margins.bottom > offsetTop)) { 
    	props.onEnterExit(props.index,'within') 
    }
	}

  render() {
  	const section = this.props.sections[this.props.index]
  	const offset = -this.props.index*this.props.rowHeight - this.props.rowHeight*0.5
  	return <div className={styles.section}>
  		<div className={styles.sectionHeadingBg}>
	    	<div className={styles.sectionHeading}>
	    		<div id={"_" + section.id} style={{position: 'relative', top: offset}}></div>
	    		<a href={"#" + section.id}>{section.heading}</a>
	    	</div>
	    </div>
	    <div className={styles.sectionMainBg}>
    		<div className={styles.sectionMain}>{this.props.children}</div>
	    </div>
   	</div>
  }
}
