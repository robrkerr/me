import React, {Component} from 'react'

export default class Headings extends Component {

  render() {
  	let visible, edgePanel, padding;
  	if (this.props.type == 'top') {
  		visible = this.props.list.map(p => p.above)
  		edgePanel = visible[0] ? this.props.list[visible.filter(p => p).length-1] : undefined
  		padding = '0 0 0.8rem 0'
  	} else {
  		visible = this.props.list.map(p => p.below)
  		edgePanel = visible[visible.length-1] ? this.props.list[visible.filter(p => !p).length] : undefined
  		padding = '0.8rem 0 0 0'
  	}
    return <div className={"headings-" + this.props.type}>
    	{
    		this.props.list.map((section,i) => {
    			return <div key={i} className="heading-bg" style={{backgroundColor: this.props.bgColor || 'white', color: this.props.color, visibility: visible[i] ? undefined : 'hidden', padding: (edgePanel && (edgePanel.id == section.id)) ? padding : undefined}}>
    				<div className="heading">
    					<a href={"#" + section.id}>{section.heading}</a>
    				</div>
    			</div>
    		})
    	}
   	</div>
  }
}
