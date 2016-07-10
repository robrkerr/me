import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Section extends Component {

	componentWillUpdate(props) {
		const element = ReactDOM.findDOMNode(this)
    const height = element.getElementsByClassName('section-heading')[0].offsetHeight
    const offsetTop = element.offsetTop
    if ((props.position != 'above') && (props.scroll.top + props.margins.top > offsetTop)) { 
    	props.onEnterExit(props.index,'above') 
    }
    if ((props.position == 'above') && (props.scroll.top + props.margins.top < offsetTop + height)) { 
    	props.onEnterExit(props.index,'within') 
    }
    if ((props.position != 'below') && (props.scroll.bottom - props.margins.bottom < offsetTop + height)) { 
    	props.onEnterExit(props.index,'below') 
    }
    if ((props.position == 'below') && (props.scroll.bottom - props.margins.bottom > offsetTop)) { 
    	props.onEnterExit(props.index,'within') 
    }
	}

  render() {
    return <div>
    	<div className="section-heading">{this.props.heading}</div>
    	<div className="section-main">{this.props.children}</div>
   	</div>
  }
}
