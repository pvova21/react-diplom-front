import React, { Component } from 'react';


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
      <main className="container">
      <div className="row">
        <div className="col">
          <div className="banner">
            <img src={require('../img/banner.jpg')} className="img-fluid" alt="К весне готовы!" />
            <h2 className="banner-header">К весне готовы!</h2>
          </div>
          <section className="top-sales">
            <h2 className="text-center">Страница не найдена</h2>
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