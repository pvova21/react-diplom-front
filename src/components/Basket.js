import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Basket extends Component {
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
          <section class="cart">
            <h2 class="text-center">Корзина</h2>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Название</th>
                  <th scope="col">Размер</th>
                  <th scope="col">Кол-во</th>
                  <th scope="col">Стоимость</th>
                  <th scope="col">Итого</th>
                  <th scope="col">Действия</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">1</td>
                  <td><Link to="/products/1.html">Босоножки 'MYER'</Link></td>
                  <td>18 US</td>
                  <td>1</td>
                  <td>34 000 руб.</td>
                  <td>34 000 руб.</td>
                  <td><button class="btn btn-outline-danger btn-sm">Удалить</button></td>
                </tr>
                <tr>
                  <td colspan="5" class="text-right">Общая стоимость</td>
                  <td>34 000 руб.</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section class="order">
            <h2 class="text-center">Оформить заказ</h2>
            <div class="card" style="max-width: 30rem; margin: 0 auto;">
              <form class="card-body">
                <div class="form-group">
                  <label for="phone">Телефон</label>
                  <input class="form-control" id="phone" placeholder="Ваш телефон" />
                </div>
                <div class="form-group">
                  <label for="address">Адрес доставки</label>
                  <input class="form-control" id="address" placeholder="Адрес доставки" />
                </div>
                <div class="form-group form-check">
                  <input type="checkbox" class="form-check-input" id="agreement" />
                  <label class="form-check-label" for="agreement">Согласен с правилами доставки</label>
                </div>
                <button type="submit" class="btn btn-outline-secondary">Оформить</button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </main>
    );
  }
}

export default Basket;