import React, {Component} from 'react'

export default class Headings extends Component {

  render() {
    return <div className={"headings-" + this.props.type}>
    	{
    		this.props.list.map((item,i) => {
    			return <div key={i} className="section-heading">
    				<a href={"#section-" + item.id}>{item.heading}</a>
    			</div>
    		})
    	}
   	</div>
  }
}
