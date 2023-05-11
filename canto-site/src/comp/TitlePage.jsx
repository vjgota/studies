import React, { Component } from 'react'

export default class TitlePage extends Component {
  render() {
    const { titleText } = this.props
    return (
      <>
        <header className='gota-header-comp'>
            <h1 className='gota-text'>{titleText}</h1>
        </header>
      </>
    )
  }
}
