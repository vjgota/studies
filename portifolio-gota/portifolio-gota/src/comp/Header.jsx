import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    const { portName, portSocName } = this.props
    return (
      <div className='gota-header'>
        <h1 className='gota-title-text'>{portName} - {portSocName}</h1>
      </div>
    )
  }
}
