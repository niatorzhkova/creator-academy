function Info() {
  return (
    <div className="container">
      <section className="section info">
        <ul className="info__list">
          <li className="info__item">
            <div className="info__item-container">
              {" "}
              <div className="item__num bebas">3</div>
              <p className="item__text montserrat">Месяца обучения</p>
            </div>
          </li>
          <li className="info__item">
            <div className="info__item-container">
              {" "}
              <div className="item__num bebas">7</div>
              <p className="item__text ">Модулей</p>
            </div>
          </li>
          <li className="info__item">
            <div className="info__item-container">
              {" "}
              <div className="item__num bebas">30</div>
              <p className="item__text ">Видеоуроков</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Info;
