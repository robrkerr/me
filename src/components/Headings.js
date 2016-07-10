import React, {Component} from 'react'

export default class Headings extends Component {

  render() {
    return <div className={"headings-" + this.props.type}>
    	{
    		this.props.list.map((section,i) => {
    			const inlineStyle = {
    				backgroundColor: section.headingBgColor || section.bgColor, 
    				color: section.headingBgColor || section.bgColor
    			}
    			return <div key={i} className="section-heading-bg" style={inlineStyle}>
    				<div className="section-heading">
    					<a href={"#section-" + section.id}>{section.heading}</a>
    				</div>
    			</div>
    		})
    	}
   	</div>
  }
}
