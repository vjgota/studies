import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    const {cardName, cardImg, cardPrice} = this.props
    return (
      <div className='card'>
        <p>{cardImg}</p>
        <p>{cardName}</p>
        <p>{cardPrice}</p>
      </div>
    )
  }
}
