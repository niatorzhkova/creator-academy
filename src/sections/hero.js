import { LazyLoadImage } from "react-lazy-load-image-component";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__left">
          <div className="hero__title dita">
            {" "}
            <span className="hero__quotes-left rotate-180">,,</span>
            <h1>Контент</h1>
            <span className="hero__quotes-right">,,</span>
          </div>

          <h2 className="subtitle hero__subtitle bebas">
            Авторский курс<br></br>Николая Чернобаева
          </h2>
          <div className="hero__text">
            <p>
              В этом курсе я передам вам весь свой наработанный за{" "}
              <strong>12 лет</strong> практики опыт сторителлинга, создания
              сценариев, фотографии, съемки и монтажа видео, документальных
              фильмов и подкастов.
            </p>
            <p>
              А также поделюсь своим опытом продвижения контента и заработка на
              профессии создателя контента (content-creator).
            </p>
          </div>
          <div className="hero__button-container">
            <button className="rectangle__button montserrat">
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
        <div className="hero__right">
          <LazyLoadImage
            alt={"Фото в блоке о курсе"}
            height={"100%"}
            src={require(`../images/hero/hero-bg.webp`)}
            width={"100%"}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
