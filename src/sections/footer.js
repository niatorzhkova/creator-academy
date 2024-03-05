import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="container">
      <section className="section footer">
        <div className="footer__block">
          <div className="footer__top">
            <div className="footer__socials-mobile">
              <ul className="footer__socials-list">
                <li className="footer__socials-tg">
                  <a
                    href="https://t.me/chernobaev_nick"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <button className="round__btn footer__btn">
                      <svg
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.4809 4.19164C16.6868 4.10496 16.9122 4.07507 17.1336 4.10507C17.355 4.13507 17.5643 4.22386 17.7398 4.36221C17.9152 4.50056 18.0504 4.6834 18.1312 4.89171C18.212 5.10001 18.2355 5.32617 18.1992 5.54664L16.3092 17.0108C16.1259 18.1166 14.9125 18.7508 13.8984 18.2C13.05 17.7391 11.79 17.0291 10.6567 16.2883C10.09 15.9175 8.3542 14.73 8.56754 13.885C8.75087 13.1625 11.6675 10.4475 13.3342 8.8333C13.9884 8.19914 13.69 7.8333 12.9175 8.41664C10.9992 9.86497 7.9192 12.0675 6.90087 12.6875C6.00254 13.2341 5.5342 13.3275 4.9742 13.2341C3.95254 13.0641 3.00504 12.8008 2.2317 12.48C1.1867 12.0466 1.23754 10.61 2.23087 10.1916L16.4809 4.19164Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </a>
                </li>
                <li className="footer__socials-sc">
                  <a
                    href="https://soundcloud.com/chernobaev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <button className="round__btn footer__btn">
                      <svg
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.4212 10.5425C17.0675 10.5425 16.7313 10.6112 16.4237 10.735C16.2188 8.50125 14.27 6.75 11.8925 6.75C11.3112 6.75 10.7462 6.86 10.2462 7.04625C10.0512 7.11875 10 7.1925 10 7.3375V15.2025C10 15.3538 10.1225 15.48 10.2762 15.495L17.4225 15.4987C18.8463 15.4987 20 14.3887 20 13.02C20 11.6512 18.845 10.5412 17.4212 10.5412V10.5425ZM7.8125 15.5H8.4375L8.75 11.1212L8.4375 6.75H7.8125L7.5 11.1212L7.8125 15.5ZM5.9375 15.5H5.3125L5 12.3212L5.3125 9.25H5.9375L6.25 12.375L5.9375 15.5ZM2.8125 15.5H3.4375L3.75 13L3.4375 10.5H2.8125L2.5 13L2.8125 15.5ZM0.3125 14.25H0.9375L1.25 13L0.9375 11.75H0.3125L0 13L0.3125 14.25Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </a>
                </li>
                <li className="footer__socials-youtube">
                  <a
                    href="https://www.youtube.com/@chernobaev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <button className="round__btn footer__btn">
                      <svg
                        viewBox="0 0 18 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.33464 8.99935L11.6596 6.49935L7.33464 3.99935V8.99935ZM16.968 2.47435C17.0763 2.86602 17.1513 3.39102 17.2013 4.05768C17.2596 4.72435 17.2846 5.29935 17.2846 5.79935L17.3346 6.49935C17.3346 8.32435 17.2013 9.66602 16.968 10.5243C16.7596 11.2743 16.2763 11.7577 15.5263 11.966C15.1346 12.0743 14.418 12.1493 13.318 12.1993C12.2346 12.2577 11.243 12.2827 10.3263 12.2827L9.0013 12.3327C5.50964 12.3327 3.33464 12.1993 2.4763 11.966C1.7263 11.7577 1.24297 11.2743 1.03464 10.5243C0.926302 10.1327 0.851302 9.60768 0.801302 8.94102C0.742969 8.27435 0.717969 7.69935 0.717969 7.19935L0.667969 6.49935C0.667969 4.67435 0.801302 3.33268 1.03464 2.47435C1.24297 1.72435 1.7263 1.24102 2.4763 1.03268C2.86797 0.924349 3.58464 0.849349 4.68464 0.799349C5.76797 0.741016 6.75963 0.716016 7.6763 0.716016L9.0013 0.666016C12.493 0.666016 14.668 0.799349 15.5263 1.03268C16.2763 1.24102 16.7596 1.72435 16.968 2.47435Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__mail">
              <div className="footer__mail-text">
                <p>Остались вопросы? </p>
                <p>Не стесняйтесь, пишите</p>
              </div>
              <div className="footer__mail-email">
                <a href="mailto:hi@contentcourse.ru">hi@contentcourse.ru</a>
              </div>
            </div>
            <div className="footer__logo">
              <div className="logo bebas">creator academy</div>
              <div className="footer__logo-rights">
                <p>Все права защищены, 2024</p>
              </div>
            </div>
            <div className="footer__socials">
              <ul className="footer__socials-list">
                <li className="footer__socials-tg">
                  <a
                    href="https://t.me/chernobaev_nick"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <button className="round__btn footer__btn">
                      <svg
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.4809 4.19164C16.6868 4.10496 16.9122 4.07507 17.1336 4.10507C17.355 4.13507 17.5643 4.22386 17.7398 4.36221C17.9152 4.50056 18.0504 4.6834 18.1312 4.89171C18.212 5.10001 18.2355 5.32617 18.1992 5.54664L16.3092 17.0108C16.1259 18.1166 14.9125 18.7508 13.8984 18.2C13.05 17.7391 11.79 17.0291 10.6567 16.2883C10.09 15.9175 8.3542 14.73 8.56754 13.885C8.75087 13.1625 11.6675 10.4475 13.3342 8.8333C13.9884 8.19914 13.69 7.8333 12.9175 8.41664C10.9992 9.86497 7.9192 12.0675 6.90087 12.6875C6.00254 13.2341 5.5342 13.3275 4.9742 13.2341C3.95254 13.0641 3.00504 12.8008 2.2317 12.48C1.1867 12.0466 1.23754 10.61 2.23087 10.1916L16.4809 4.19164Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </a>
                </li>
                <li className="footer__socials-sc">
                  <a
                    href="https://soundcloud.com/chernobaev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <button className="round__btn footer__btn">
                      <svg
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.4212 10.5425C17.0675 10.5425 16.7313 10.6112 16.4237 10.735C16.2188 8.50125 14.27 6.75 11.8925 6.75C11.3112 6.75 10.7462 6.86 10.2462 7.04625C10.0512 7.11875 10 7.1925 10 7.3375V15.2025C10 15.3538 10.1225 15.48 10.2762 15.495L17.4225 15.4987C18.8463 15.4987 20 14.3887 20 13.02C20 11.6512 18.845 10.5412 17.4212 10.5412V10.5425ZM7.8125 15.5H8.4375L8.75 11.1212L8.4375 6.75H7.8125L7.5 11.1212L7.8125 15.5ZM5.9375 15.5H5.3125L5 12.3212L5.3125 9.25H5.9375L6.25 12.375L5.9375 15.5ZM2.8125 15.5H3.4375L3.75 13L3.4375 10.5H2.8125L2.5 13L2.8125 15.5ZM0.3125 14.25H0.9375L1.25 13L0.9375 11.75H0.3125L0 13L0.3125 14.25Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </a>
                </li>
                <li className="footer__socials-youtube">
                  <a
                    href="https://www.youtube.com/@chernobaev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <button className="round__btn footer__btn">
                      <svg
                        viewBox="0 0 18 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.33464 8.99935L11.6596 6.49935L7.33464 3.99935V8.99935ZM16.968 2.47435C17.0763 2.86602 17.1513 3.39102 17.2013 4.05768C17.2596 4.72435 17.2846 5.29935 17.2846 5.79935L17.3346 6.49935C17.3346 8.32435 17.2013 9.66602 16.968 10.5243C16.7596 11.2743 16.2763 11.7577 15.5263 11.966C15.1346 12.0743 14.418 12.1493 13.318 12.1993C12.2346 12.2577 11.243 12.2827 10.3263 12.2827L9.0013 12.3327C5.50964 12.3327 3.33464 12.1993 2.4763 11.966C1.7263 11.7577 1.24297 11.2743 1.03464 10.5243C0.926302 10.1327 0.851302 9.60768 0.801302 8.94102C0.742969 8.27435 0.717969 7.69935 0.717969 7.19935L0.667969 6.49935C0.667969 4.67435 0.801302 3.33268 1.03464 2.47435C1.24297 1.72435 1.7263 1.24102 2.4763 1.03268C2.86797 0.924349 3.58464 0.849349 4.68464 0.799349C5.76797 0.741016 6.75963 0.716016 7.6763 0.716016L9.0013 0.666016C12.493 0.666016 14.668 0.799349 15.5263 1.03268C16.2763 1.24102 16.7596 1.72435 16.968 2.47435Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__middle">
            <ul className="footer__middle-list">
              <li className="footer__middle-item">
                <Link to="/policy" target="_blank" rel="noopener noreferrer">
                  Политика конфиденциальности
                </Link>
              </li>
              <li className="footer__middle-item">
                <Link to="/agreement" target="_blank" rel="noopener noreferrer">
                  Пользовательское соглашение
                </Link>
              </li>
              <li className="footer__middle-item">
                <Link to="/offer" target="_blank" rel="noopener noreferrer">
                  Договор оферты
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__bottom">
            <div className="footer__bottom-text">Дизайн от</div>
            <div className="footer__bottom-logo">
              <svg
                width="127"
                height="25"
                viewBox="0 0 127 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.0433 13.4156H14.3166V16.2208H17.18V19.026H11.4533V16.2208H8.58999V19.026H2.86333V16.2208H5.72666V13.4156H0V10.6104H5.72666V7.80519H2.86333V5H8.58999V7.80519H11.4533V5H17.18V7.80519H14.3166V10.6104H20.0433V13.4156Z"
                  fill="white"
                />
                <path
                  d="M20.0433 13.4156H14.3166V16.2208H17.18V19.026H11.4533V16.2208H8.58999V19.026H2.86333V16.2208H5.72666V13.4156H0V10.6104H5.72666V7.80519H2.86333V5H8.58999V7.80519H11.4533V5H17.18V7.80519H14.3166V10.6104H20.0433V13.4156Z"
                  fill="#FF4D00"
                />
                <path
                  d="M26.9281 7.85714V19.2857H24.0117V5H38.5935V19.2857H35.6771V7.85714H26.9281Z"
                  fill="white"
                />
                <path
                  d="M44.432 16.4285H41.5156V7.85714H44.432V16.4285ZM53.1812 7.85714H44.432V5H53.1812V7.85714ZM56.0975 16.4285H53.1812V7.85714H56.0975V16.4285ZM53.1812 19.2857H44.432V16.4285H53.1812V19.2857Z"
                  fill="white"
                />
                <path
                  d="M61.9397 10.7143H59.0234V7.85714H61.9397V10.7143ZM59.0234 13.5714H61.9397V19.2857H59.0234V13.5714ZM70.6886 7.85714H61.9397V5H73.6049V19.2857H70.6886V13.5714H61.9397V10.7143H70.6886V7.85714Z"
                  fill="white"
                />
                <path
                  d="M88.1891 7.85714H79.4397V5H88.1891V7.85714ZM79.4397 19.2857V25H76.5234V7.85714H79.4397V16.4285H88.1891V19.2857H79.4397ZM91.1054 16.4285H88.1891V7.85714H91.1054V16.4285Z"
                  fill="white"
                />
                <path
                  d="M94.0391 5H96.9554V10.7143H94.0391V5ZM105.704 10.7143V5H108.621V19.2857H105.704V13.5714H96.9554V10.7143H105.704Z"
                  fill="white"
                />
                <path
                  d="M123.205 7.85714H114.456V5H123.205V7.85714ZM114.456 13.5714V16.4285H111.539V7.85714H114.456V10.7143H123.205V7.85714H126.121V13.5714H114.456ZM126.121 19.2857H114.456V16.4285H126.121V19.2857Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
