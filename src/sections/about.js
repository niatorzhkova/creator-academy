import RoundBtn from "../components/round_btn";

function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        {" "}
        <h1 className="section__title about__title dita">Обо мне</h1>
        <ul className="about__list">
          {" "}
          <li className="about__block">
            <div className="container flex-end">
              <div className="about__text">
                <div className="about__text-left">
                  <ul className=" text__small text__small-list bebas">
                    <li className=" subtitle text__small-item">
                      документальные фильмы
                    </li>
                    <li className="subtitle text__small-item">короткий метр</li>
                    <li className="subtitle text__small-item">youtube</li>
                  </ul>
                  <div className="text__big bebas">
                    <span>режиссер</span>
                  </div>
                </div>
                <div className="about__text-right about__text-desc">
                  <p className="montserrat">
                    Автор 3 документальных фильмов, двух youtube-каналов "Nick
                    Chernobaev" и "Loftblog", и более 200 видео различных
                    форматов от влогов до короткометражных фильмов
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className=" about__block">
            <div className="container space-between">
              <div className="about__top-button">
                <a
                  href="https://www.youtube.com/watch?v=PUGzYnYlq8o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__btn"
                >
                  <RoundBtn />
                </a>
              </div>
              <div className="about__text space-between">
                <div className="about__text-left about__text-desc">
                  <p className="montserrat">
                    Автор подкаста "Сделано с нуля", где уже вышло больше 100
                    выпусков с лучшими экспертами в разных областях от кино и
                    фотографии, до медицины и психологии. Более 30 000
                    постоянных слушателей и миллионы прослушиваний и просмотров
                    на всех топовых площадках.
                  </p>
                </div>
                <div className="about__text-right">
                  <div className="subtitle text__small bebas text-end">
                    “сделано с нуля”
                  </div>
                  <div className="text__big bebas">автор</div>
                </div>
              </div>
            </div>
          </li>
          <li className="about__block">
            <div className="container space-between">
              <div className="about__top ">
                <p className="montserrat">
                  12 лет работал в edTech компании Loftschool. Создал 12 курсов,
                  а также курировал и участвовал в создании еще около 30 курсов
                  других авторов.
                </p>
              </div>
              <div className="about__text flex-column">
                <div className="subtitle text__small bebas">
                  Онлайн-образование
                </div>
                <div className="text__big bebas">преподаватель</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
