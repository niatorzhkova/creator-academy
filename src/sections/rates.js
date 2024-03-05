function Rates({ data }) {
  return (
    <div className="container">
      <section className="section rates">
        <h1 className="section__title rates__title dita">{data.title}</h1>
        <div className="rates__block">
          <div className="rates__rate">
            <div className="rate__top">
              <div className="top__text">
                <h2 className="subtitle bebas rates__subtitle">
                  {data.standard.title}
                </h2>
                <div className="rate__divider"></div>
                <ul className="rates__list">
                  {data &&
                    data.standard.list.map((item, index) => (
                      <li className="rate__item" key={index}>
                        <span className="rate__dot"></span>
                        <p>{item}</p>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="subtitle bebas rate__price">
                {data.standard.price}₽
              </div>
            </div>
            <div className="rate__bottom">
              <button className="rectangle__button montserrat rates__button">
                <span>Забронировать</span>
                <div className="hero__button-svg">
                  <svg
                    viewBox="0 0 50 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M49.3536 4.85355C49.5488 4.65829 49.5488 4.34171 49.3536 4.14645L46.1716 0.964466C45.9763 0.769204 45.6597 0.769204 45.4645 0.964466C45.2692 1.15973 45.2692 1.47631 45.4645 1.67157L48.2929 4.5L45.4645 7.32843C45.2692 7.52369 45.2692 7.84027 45.4645 8.03553C45.6597 8.2308 45.9763 8.2308 46.1716 8.03553L49.3536 4.85355ZM0 5H49V4H0L0 5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="rates__rate individual">
            <div className="rate__top">
              <div className="top__text">
                <h2 className="subtitle bebas rates__subtitle">
                  {data.individual.title}
                </h2>
                <div className="rate__divider"></div>
                <ul className="rates__list">
                  {data &&
                    data.individual.list.map((item, index) => (
                      <li className="rate__item" key={index}>
                        <span className="rate__dot"></span>
                        <p className="rate__text"> {item}</p>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="subtitle bebas rate__price">
                {data.individual.price}₽
              </div>
            </div>
            <div className="rate__bottom">
              <button className="rectangle__button montserrat rates__button">
                {" "}
                <span>Забронировать</span>
                <div className="hero__button-svg">
                  <svg
                    viewBox="0 0 50 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M49.3536 4.85355C49.5488 4.65829 49.5488 4.34171 49.3536 4.14645L46.1716 0.964466C45.9763 0.769204 45.6597 0.769204 45.4645 0.964466C45.2692 1.15973 45.2692 1.47631 45.4645 1.67157L48.2929 4.5L45.4645 7.32843C45.2692 7.52369 45.2692 7.84027 45.4645 8.03553C45.6597 8.2308 45.9763 8.2308 46.1716 8.03553L49.3536 4.85355ZM0 5H49V4H0L0 5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Rates;
