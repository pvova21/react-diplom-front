import React, { Component } from 'react';
//import Headerlogo from '../img/header-logo.png';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    // Инициализация состояния компонента
    this.state = {
      // Ваши начальные значения состояния здесь
    };
  }

  // Методы обработки событий или другие методы компонента
  // Методы могут быть определены здесь

  render() {
    return (
        <header class="container">
           {/* <Link to="#">123</Link> */}
        <div class="row">
          <div class="col">
            <nav class="navbar navbar-expand-sm navbar-light bg-light">
              
              {/* <div class="collapse navbar-collapse" id="navbarMain">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <Link class="nav-link" to="/">Главная</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/catalog.html">Каталог</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/about.html">О магазине</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/contacts.html">Контакты</Link>
                  </li>
                </ul>
                <div>
                  <div class="header-controls-pics">
                    <div data-id="search-expander" class="header-controls-pic header-controls-search"></div>
                    <div class="header-controls-pic header-controls-cart">
                      <div class="header-controls-cart-full">1</div>
                      <div class="header-controls-cart-menu"></div>
                    </div>
                  </div>
                  <form data-id="search-form" class="header-controls-search-form form-inline invisible">
                    <input class="form-control" placeholder="Поиск" />
                  </form>
                </div>
              </div> */}
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;