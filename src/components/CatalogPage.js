import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      <main class="container">
      <div class="row">
        <div class="col">
          <div class="banner">
            <img src="./img/banner.jpg" class="img-fluid" alt="К весне готовы!" />
            <h2 class="banner-header">К весне готовы!</h2>
          </div>
          <section class="catalog">
            <h2 class="text-center">Каталог</h2>
            <form class="catalog-search-form form-inline">
              <input class="form-control" placeholder="Поиск" />
            </form>
            <ul class="catalog-categories nav justify-content-center">
              <li class="nav-item">
                <Link class="nav-link active" to="#">Все</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="#">Женская обувь</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="#">Мужская обувь</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="#">Обувь унисекс</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="#">Детская обувь</Link>
              </li>
            </ul>
            <div class="row">
              <div class="col-4">
                <div class="card catalog-item-card">
                  <img src="./img/products/sandals_myer.jpg"
                    class="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                  <div class="card-body">
                    <p class="card-text">Босоножки 'MYER'</p>
                    <p class="card-text">34 000 руб.</p>
                    <Link to="/products/1.html" class="btn btn-outline-primary">Заказать</Link>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card catalog-item-card">
                  <img src="./img/products/sandals_keira.jpg"
                    class="card-img-top img-fluid" alt="Босоножки 'Keira'" />
                  <div class="card-body">
                    <p class="card-text">Босоножки 'Keira'</p>
                    <p class="card-text">7 600 руб.</p>
                    <Link to="/products/1.html" class="btn btn-outline-primary">Заказать</Link>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card catalog-item-card">
                  <img src="./img/products/superhero_sneakers.jpg"
                    class="card-img-top img-fluid" alt="Супергеройские кеды" />
                  <div class="card-body">
                    <p class="card-text">Супергеройские кеды</p>
                    <p class="card-text">1 400 руб.</p>
                    <Link to="/products/1.html" class="btn btn-outline-primary">Заказать</Link>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card catalog-item-card">
                  <img src="./img/products/sandals_myer.jpg"
                    class="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                  <div class="card-body">
                    <p class="card-text">Босоножки 'MYER'</p>
                    <p class="card-text">34 000 руб.</p>
                    <Link to="/products/1.html" class="btn btn-outline-primary">Заказать</Link>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card catalog-item-card">
                  <img src="./img/products/sandals_keira.jpg"
                    class="card-img-top img-fluid" alt="Босоножки 'Keira'" />
                  <div class="card-body">
                    <p class="card-text">Босоножки 'Keira'</p>
                    <p class="card-text">7 600 руб.</p>
                    <Link to="/products/1.html" class="btn btn-outline-primary">Заказать</Link>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card catalog-item-card">
                  <img src="./img/products/superhero_sneakers.jpg"
                    class="card-img-top img-fluid" alt="Супергеройские кеды" />
                  <div class="card-body">
                    <p class="card-text">Супергеройские кеды</p>
                    <p class="card-text">1 400 руб.</p>
                    <Link to="/products/1.html" class="btn btn-outline-primary">Заказать</Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center">
              <button class="btn btn-outline-primary">Загрузить ещё</button>
            </div>
          </section>
        </div>
      </div>
    </main>
    );
  }
}

export default CatalogPage;