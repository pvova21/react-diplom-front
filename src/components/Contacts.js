import React, { Component } from 'react';
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
        <main className="container">
        <div className="row">
          <div className="col">
            <div className="banner">
              <img src={require('../img/banner.jpg')} className="img-fluid" 
              
              alt="К весне готовы!" />
              <h2 className="banner-header">К весне готовы!</h2>
            </div>
            <section className="top-sales">
              <h2 className="text-center">Контакты</h2>
              <p>Наш головной офис расположен в г.Москва, по адресу: Варшавское шоссе, д. 17, бизнес-центр W Plaza.</p>
              <h5 className="text-center">Координаты для связи:</h5>
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