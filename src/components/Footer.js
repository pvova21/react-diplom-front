import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
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
      <div></div>
      //   <footer class="container bg-light footer">
      //   <div class="row">
      //     <div class="col">
      //       <section>
      //         <h5>Информация</h5>
      //         <ul class="nav flex-column">
      //           <li class="nav-item"><Link to="/about.html" class="nav-link">О магазине</Link></li>
      //           <li class="nav-item"><Link to="/catalog.html" class="nav-link">Каталог</Link></li>
      //           <li class="nav-item"><Link to="/contacts.html" class="nav-link">Контакты</Link></li>
      //         </ul>
      //       </section>
      //     </div>
      //     <div class="col">
      //       <section>
      //         <h5>Принимаем к оплате:</h5>
      //         <div class="footer-pay">
      //           <div class="footer-pay-systems footer-pay-systems-paypal"></div>
      //           <div class="footer-pay-systems footer-pay-systems-master-card"></div>
      //           <div class="footer-pay-systems footer-pay-systems-visa"></div>
      //           <div class="footer-pay-systems footer-pay-systems-yandex"></div>
      //           <div class="footer-pay-systems footer-pay-systems-webmoney"></div>
      //           <div class="footer-pay-systems footer-pay-systems-qiwi"></div>
      //         </div>
      //       </section>
      //       <section>
      //         <div class="footer-copyright">2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров.
      //           Все права защищены.<br />Доставка по всей России!
      //         </div>
      //       </section>
      //     </div>
      //     <div class="col text-right">
      //       <section class="footer-contacts">
      //         <h5>Контакты:</h5>
      //         <Link class="footer-contacts-phone" to="tel:+7-495-790-35-03">+7 495 79 03 5 03</Link>
      //         <span class="footer-contacts-working-hours">Ежедневно: с 09-00 до 21-00</span>
      //         <Link class="footer-contacts-email" to="mailto:office@bosanoga.ru">office@bosanoga.ru</Link>
      //         <div class="footer-social-links">
      //           <div class="footer-social-link footer-social-link-twitter"></div>
      //           <div class="footer-social-link footer-social-link-vk"></div>
      //         </div>
      //       </section>
      //     </div>
      //   </div>
      // </footer>
    );
  }
}

export default Footer;