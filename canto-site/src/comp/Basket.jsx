import React, { Component } from 'react'
import Card from './card/Card'
import './css/Basket.css'

export default class Basket extends Component {
  render() {
    return (
      <div className='gota-body'>
            <Card
                cardName='SEM CHAVE'
            />
      </div>
    )
  }
}
