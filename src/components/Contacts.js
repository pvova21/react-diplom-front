import React, { Component } from 'react';
import banner from '../img/banner.jpg';
import { Link } from 'react-router-dom';

class Contacts extends Component {
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
              <img src={banner} class="img-fluid" alt="К весне готовы!" />
              <h2 class="banner-header">К весне готовы!</h2>
            </div>
            <section class="top-sales">
              <h2 class="text-center">Контакты</h2>
              <p>Наш головной офис расположен в г.Москва, по адресу: Варшавское шоссе, д. 17, бизнес-центр W Plaza.</p>
              <h5 class="text-center">Координаты для связи:</h5>
              <p>Телефон: <Link to="tel:+7-495-790-35-03">+7 495 79 03 5 03</Link> (ежедневно: с 09-00 до 21-00)</p>
              <p>Email: <Link to="mailto:office@bosanoga.ru">office@bosanoga.ru</Link></p>
            </section>
          </div>
        </div>
      </main>
    );
  }
}

export default Contacts;