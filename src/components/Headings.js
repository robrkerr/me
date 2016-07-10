import React, {Component} from 'react'

export default class Headings extends Component {

  render() {
    return <div className={"headings-" + this.props.type}>
    	{
    		this.props.list.map((item,i) => 
    			<div key={i} className="headings-row">{item}</div>
    		)
    	}
   	</div>
  }
}
