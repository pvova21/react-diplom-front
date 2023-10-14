import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import ConstImages from './ConstImages';

class CatalogPage extends Component {
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
      <main className="container">
      <div className="row">
        <div className="col">
          <div className="banner">
            <img src={require('../img/banner.jpg')}className="img-fluid" alt="К весне готовы!" />
            <h2 className="banner-header">К весне готовы!</h2>
          </div>
          <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            <form className="catalog-search-form form-inline">
              <input className="form-control" placeholder="Поиск" />
            </form>
            <ul className="catalog-categories nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link active" to="#">Все</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Женская обувь</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Мужская обувь</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Обувь унисекс</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Детская обувь</Link>
              </li>
            </ul>
            <div className="row">
              <div className="col-4">
                <div className="card catalog-item-card">
                  <img src={require('../img/products/sandals_myer.jpg')}
                    className="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                  <div className="card-body">
                    <p className="card-text">Босоножки 'MYER'</p>
                    <p className="card-text">34 000 руб.</p>
                    <Link to="/products/1.html" className="btn btn-outline-primary">Заказать</Link>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card catalog-item-card">
                  <img src={require('../img/products/sandals_keira.jpg')}
                    className="card-img-top img-fluid" alt="Босоножки 'Keira'" />
                  <div className="card-body">
                    <p className="card-text">Босоножки 'Keira'</p>
                    <p className="card-text">7 600 руб.</p>
                    <Link to="/products/1.html" className="btn btn-outline-primary">Заказать</Link>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card catalog-item-card">
                  <img src={require('../img/products/superhero_sneakers.jpg')}
                    className="card-img-top img-fluid" alt="Супергеройские кеды" />
                  <div className="card-body">
                    <p className="card-text">Супергеройские кеды</p>
                    <p className="card-text">1 400 руб.</p>
                    <Link to="/products/1.html" className="btn btn-outline-primary">Заказать</Link>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card catalog-item-card">
                  <img src={require('../img/products/sandals_myer.jpg')}
                    className="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                  <div className="card-body">
                    <p className="card-text">Босоножки 'MYER'</p>
                    <p className="card-text">34 000 руб.</p>
                    <Link to="/products/1.html" className="btn btn-outline-primary">Заказать</Link>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card catalog-item-card">
                  <img src={require('../img/products/sandals_keira.jpg')}
                    className="card-img-top img-fluid" alt="Босоножки 'Keira'" />
                  <div className="card-body">
                    <p className="card-text">Босоножки 'Keira'</p>
                    <p className="card-text">7 600 руб.</p>
                    <Link to="/products/1.html" className="btn btn-outline-primary">Заказать</Link>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card catalog-item-card">
                  <img src={require('../img/products/superhero_sneakers.jpg')}
                    className="card-img-top img-fluid" alt="Супергеройские кеды" />
                  <div className="card-body">
                    <p className="card-text">Супергеройские кеды</p>
                    <p className="card-text">1 400 руб.</p>
                    <Link to="/products/1.html" className="btn btn-outline-primary">Заказать</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-outline-primary">Загрузить ещё</button>
            </div>
          </section>
        </div>
      </div>
    </main>
    );
  }
}

export default CatalogPage;