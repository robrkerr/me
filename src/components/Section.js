import React, {Component} from 'react'
import ReactDOM from 'react-dom'

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
  	const offset = -this.props.index*this.props.rowHeight - this.props.rowHeight*0.2
  	return <div className="section">
  		<div className="section-heading-bg">
	    	<div className="section-heading">
	    		<div id={"_" + section.id} style={{position: 'relative', top: offset}}></div>
	    		<a href={"#" + section.id}>{section.heading}</a>
	    	</div>
	    </div>
	    <div className="section-main-bg">
    		<div className="section-main">{this.props.children}</div>
	    </div>
   	</div>
  }
}
