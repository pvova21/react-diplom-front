import React, { Component } from 'react';

class HomePage extends Component {
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
            <img src={require('../img/banner.jpg')} className="img-fluid" alt="К весне готовы!" />
            <h2 className="banner-header">К весне готовы!</h2>
          </div>
          <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            <div className="preloader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </section>
          <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            <div className="preloader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </section>
        </div>
      </div>
    </main>
    );
  }
}

export default HomePage;