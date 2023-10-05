import React, { Component } from 'react';
import banner from '../img/header-logo.png';

class Error extends Component {
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
            <h2 class="text-center">Страница не найдена</h2>
            <p>
              Извините, такая страница не найдена!
            </p>
          </section>
        </div>
      </div>
    </main>
    );
  }
}

export default Error;