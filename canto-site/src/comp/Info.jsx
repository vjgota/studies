import React, { Component } from 'react'
import './css/Info.css'

export default class Info extends Component {
  render() {
    return (
      <div className='column align-center'>
        <h1 className='test-giga text-center'>
          Descubra a melhor experiência de beleza com o Cantinho da Preta.
          </h1>
        <p class="text-lg text-center max-w-lg">
          De consultas a produtos, nosso site oferece tudo o que você precisa para uma experiência de beleza luxuosa e personalizada. Agende um horário ou compre nossa seleção de produtos de primeira linha hoje mesmo.
        </p>
        {/* eslint-disable-next-line */}
        <a className='button xl main mt-lg w-button'>
          Visite nosso site para comprar e agendar
        </a>
        <div class="column align-center">
          <h2 class="max-w-lg text-center">
            Descubra a melhor experiência de compras.
          </h2>
          <p class="text-lg text-center max-w-md">
            O Cantinho oferece a você uma experiência de compras exclusiva com a conveniência de agendar um horário. Navegue por uma ampla variedade de produtos, incluindo roupas, acessórios, tudo no conforto de sua própria casa. Agende um horário agora para ver o que temos reservado para você!
          </p>
        </div>
      </div>
    )
  }
}
