import React, {Component} from 'react'

export default class Link extends Component {
  render() {
    return <a target="_blank" href={this.props.href}>{this.props.text}</a>
  }
}
