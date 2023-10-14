import React, { Component } from 'react';
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
        <header className="container">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
              <div className="collapse navbar-collapse" id="navbarMain">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Главная</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/catalog">Каталог</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">О магазине</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contacts">Контакты</Link>
                  </li>
                </ul>
                <div>
                  <div className="header-controls-pics">
                    <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>
                    <div className="header-controls-pic header-controls-cart">
                      <div className="header-controls-cart-full">1</div>
                      <div className="header-controls-cart-menu"></div>
                    </div>
                  </div>
                  <form data-id="search-form" className="header-controls-search-form form-inline invisible">
                    <input className="form-control" placeholder="Поиск" />
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;