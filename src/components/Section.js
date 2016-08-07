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
  	const { id, heading, index, rowHeight, children } = this.props
  	const offset = -index*rowHeight - rowHeight*0.5
  	return <div className={styles.section}>
  		<div className={styles.sectionHeadingBg}>
	    	<div className={styles.sectionHeading}>
	    		<div id={"_" + id} style={{position: 'relative', top: offset}}></div>
	    		<a href={"#" + id}>{heading}</a>
	    	</div>
	    </div>
	    <div className={styles.sectionMain}>
        <div className={styles.sectionMainBg}></div>
    		<div className={styles.sectionMainContent}>{children}</div>
	    </div>
   	</div>
  }
}
