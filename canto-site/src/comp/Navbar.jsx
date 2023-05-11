import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <nav id='menu'>
      <input type='checkbox' id='responsive-menu'/><label></label>
      <ul>
          <li><a href='http://'>início</a></li>
          <li><a class='dropdown-arrow' href='http://'>produtos</a>
          <ul class='sub-menus'>
              <li><a href='http://'>cabelos</a></li>
              <li><a href='http://'>acessórios</a></li>
              <li><a href='http://'>roupas</a></li>
          </ul>
          </li>
          <li><a href='http://'>sobre nós</a></li>
      </ul>
      </nav>
    )
  }
}
