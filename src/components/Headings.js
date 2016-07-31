import React, {Component} from 'react'
import styles from './styles.css'

export default class Headings extends Component {

  render() {
    const { props } = this
  	let visible, edgePanel
    const padding = '0.8rem'
    const top = (props.type == 'Top')
  	if (top) {
  		visible = props.list.map(p => p.above)
  		edgePanel = visible[0] ? props.list[visible.filter(p => p).length-1] : undefined
  	} else {
  		visible = props.list.map(p => p.below)
  		edgePanel = visible[visible.length-1] ? props.list[visible.filter(p => !p).length] : undefined
  	}
    function headingStyle(section,i) {
      const onEdge = edgePanel && (edgePanel.id == section.id)
      return {
        backgroundColor: props.bgColor, 
        color: props.color, 
        visibility: visible[i] ? undefined : 'hidden', 
        paddingBottom: (top && onEdge) ? padding : undefined,
        paddingTop: ((!top && onEdge) || (top && (i==0))) ? padding : undefined,
        width: 'calc(100% - ' + props.scrollPad + 'px)'
      }
    }
    return <div className={styles["headings" + props.type]}>
    	{
    		props.list.map((section,i) => {
    			return <div key={i} className={styles.headingBg} style={headingStyle(section,i)}>
    				<div className={styles.heading}>
    					<a href={"#" + section.id}>{section.heading}</a>
    				</div>
    			</div>
    		})
    	}
   	</div>
  }
}
