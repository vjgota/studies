import React, { Component } from 'react';
import { PRODUCT_LIST } from '../data';

export default class Card extends Component {
  render() {
    return (
        <ul className='products__list'>
            { PRODUCT_LIST.map(({ id, name, descript, img, price }) => (
                <li key={ id }>
                    <div className='products__case'>
                        <h2 className='product__name'>{ name }</h2>
                        <img src={ img } alt={ name }></img>
                        <span>{ descript }</span>
                        <span>
                           Por:{ ' ' }
                            <span className='product__price'>
                              { `R$ ${price},00` }
                            </span>
                        </span>
                    </div>
                </li>
            ))}
        </ul>
    );
  }
}
