import React, { Component } from 'react';

class ProductPage extends Component {
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

                <section className="catalog-item">
                    <h2 className="text-center">Босоножки 'MYER'</h2>
                    <div className="row">
                        <div className="col-5">
                            <img src={require('../img/products/sandals_myer.jpg')}
                                className="img-fluid" alt="" />
                        </div>
                        <div className="col-7">
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td>Артикул</td>
                                        <td>1000046</td>
                                    </tr>
                                    <tr>
                                        <td>Производитель</td>
                                        <td>PAUL ANDREW</td>
                                    </tr>
                                    <tr>
                                        <td>Цвет</td>
                                        <td>Чёрный</td>
                                    </tr>
                                    <tr>
                                        <td>Материалы</td>
                                        <td>Кожа</td>
                                    </tr>
                                    <tr>
                                        <td>Сезон</td>
                                        <td>Лето</td>
                                    </tr>
                                    <tr>
                                        <td>Повод</td>
                                        <td>Прогулка</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="text-center">
                                <p>Размеры в наличии: <span className="catalog-item-size selected">18 US</span> <span className="catalog-item-size">20 US</span></p>
                                <p>Количество: <span className="btn-group btn-group-sm pl-2">
                                        <button className="btn btn-secondary">-</button>
                                        <span className="btn btn-outline-primary">1</span>
                                        <button className="btn btn-secondary">+</button>
                                    </span>
                                </p>
                            </div>
                            <button className="btn btn-danger btn-block btn-lg">В корзину</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </main>
    );
  }
}

export default ProductPage;