function Subscription() {
  return (
    <section className="section subscription">
      <div className="container">
        <h1 className="section__title dita subscription__title">
          Подписаться на рассылку
        </h1>
        <div className="subscription__block">
          <div className="subscription__left">
            {" "}
            <div className="subscription__text">
              <p>
                Делюсь полезными материалами и опытом, анонсами новых курсов и
                новостями
              </p>
            </div>
            <div className="subscription__input-block">
              <input
                className="subscription__input montserrat"
                placeholder="Почта"
              />
              <button className="rectangle__button montserrat subscription__button">
                <span>Подписаться</span>
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
          <div className="subscription__right">
            <img
              alt="Фото блока подписки"
              className="subscription__image"
              src={require("../images/subscription/subscription.png")}
            />
          </div>
        </div>
      </div>
      <div className="subscription__mobile-img">
        <img
          alt="Фото блока подписки"
          className="subscription__image"
          src={require("../images/subscription/subscription.png")}
        />
      </div>
    </section>
  );
}

export default Subscription;
