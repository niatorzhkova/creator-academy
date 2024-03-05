import "../App.css";
import _ from "lodash";
import Header from "../sections/header";
import Hero from "../sections/hero";
import Info from "../sections/info";
import About from "../sections/about";
import Clients from "../sections/clients";
import Gallery from "../sections/gallery";
import WillLearn from "../sections/will-learn";
import HowItGoes from "../sections/how-it-goes.js";
import Programme from "../sections/programme.js";
import Rates from "../sections/rates.js";
import Reviews from "../sections/reviews.js";
import Subscription from "../sections/subscription.js";
import Goal from "../sections/goal.js";
import Footer from "../sections/footer.js";
import FixedMenu from "../sections/fixed-menu.js";

import React, { useEffect, useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

function Main() {
  const short = require("../content/gallery-short.js").default;
  const documentaries = require("../content/gallery-documentaries.js").default;
  const podcasts = require("../content/gallery-podcasts.js").default;
  const willLearn = require("../content/will-learn.js").default;
  const how = require("../content/how.js").default;
  const programme = require("../content/programme.js").default;
  const rates = require("../content/rates.js").default;
  const reviews = require("../content/reviews.js").default;
  const [fixedBannerIsShown, setFixedBannerIsShown] = useState(false);
  const headerRef = useRef(null);
  const smoothScroll = (section) => {
    const block = document.getElementById(section);
    block.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "start",
    });
  };

  const showFixedBanner = () => {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    if (currentScroll > 700) {
      setFixedBannerIsShown(true);
    } else {
      setFixedBannerIsShown(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", _.throttle(showFixedBanner, 250));
  });

  const fixedHeader = () => {
    return (
      <header className={"header-fixed"} ref={headerRef}>
        <div className="container">
          <div className="header">
            <div className="header__logo-container">
              {" "}
              <div className="header__logo">
                <svg
                  viewBox="0 0 128 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.12 11.236H8.616V13.468C8.616 16.156 7.272 17.692 4.68 17.692C2.088 17.692 0.744 16.156 0.744 13.468V4.732C0.744 2.044 2.088 0.508 4.68 0.508C7.272 0.508 8.616 2.044 8.616 4.732V6.364H6.12V4.564C6.12 3.364 5.592 2.908 4.752 2.908C3.912 2.908 3.384 3.364 3.384 4.564V13.636C3.384 14.836 3.912 15.268 4.752 15.268C5.592 15.268 6.12 14.836 6.12 13.636V11.236ZM17.7058 17.5H15.0178C14.8738 17.068 14.7778 16.804 14.7778 15.436V12.796C14.7778 11.236 14.2498 10.66 13.0498 10.66H12.1378V17.5H9.49781V0.699999H13.4818C16.2178 0.699999 17.3938 1.972 17.3938 4.564V5.884C17.3938 7.612 16.8418 8.74 15.6658 9.292C16.9858 9.844 17.4178 11.116 17.4178 12.868V15.46C17.4178 16.276 17.4418 16.876 17.7058 17.5ZM13.4098 3.1H12.1378V8.26H13.1698C14.1538 8.26 14.7538 7.828 14.7538 6.484V4.828C14.7538 3.628 14.3458 3.1 13.4098 3.1ZM21.0741 3.1V7.78H24.6981V10.18H21.0741V15.1H25.6341V17.5H18.4341V0.699999H25.6341V3.1H21.0741ZM32.406 0.699999L35.094 17.5H32.43L31.974 14.452H28.734L28.278 17.5H25.854L28.542 0.699999H32.406ZM30.342 3.676L29.07 12.172H31.614L30.342 3.676ZM33.9214 3.1V0.699999H42.0814V3.1H39.3214V17.5H36.6814V3.1H33.9214ZM44.9481 4.564V13.636C44.9481 14.836 45.4761 15.292 46.3161 15.292C47.1561 15.292 47.6841 14.836 47.6841 13.636V4.564C47.6841 3.364 47.1561 2.908 46.3161 2.908C45.4761 2.908 44.9481 3.364 44.9481 4.564ZM42.3081 13.468V4.732C42.3081 2.044 43.7241 0.508 46.3161 0.508C48.9081 0.508 50.3241 2.044 50.3241 4.732V13.468C50.3241 16.156 48.9081 17.692 46.3161 17.692C43.7241 17.692 42.3081 16.156 42.3081 13.468ZM59.5277 17.5H56.8397C56.6957 17.068 56.5997 16.804 56.5997 15.436V12.796C56.5997 11.236 56.0717 10.66 54.8717 10.66H53.9597V17.5H51.3197V0.699999H55.3037C58.0397 0.699999 59.2157 1.972 59.2157 4.564V5.884C59.2157 7.612 58.6637 8.74 57.4877 9.292C58.8077 9.844 59.2397 11.116 59.2397 12.868V15.46C59.2397 16.276 59.2637 16.876 59.5277 17.5ZM55.2317 3.1H53.9597V8.26H54.9917C55.9757 8.26 56.5757 7.828 56.5757 6.484V4.828C56.5757 3.628 56.1677 3.1 55.2317 3.1ZM69.1185 0.699999L71.8065 17.5H69.1425L68.6865 14.452H65.4465L64.9905 17.5H62.5665L65.2545 0.699999H69.1185ZM67.0545 3.676L65.7825 12.172H68.3265L67.0545 3.676ZM77.4525 11.236H79.9485V13.468C79.9485 16.156 78.6045 17.692 76.0125 17.692C73.4205 17.692 72.0765 16.156 72.0765 13.468V4.732C72.0765 2.044 73.4205 0.508 76.0125 0.508C78.6045 0.508 79.9485 2.044 79.9485 4.732V6.364H77.4525V4.564C77.4525 3.364 76.9245 2.908 76.0845 2.908C75.2445 2.908 74.7165 3.364 74.7165 4.564V13.636C74.7165 14.836 75.2445 15.268 76.0845 15.268C76.9245 15.268 77.4525 14.836 77.4525 13.636V11.236ZM86.6863 0.699999L89.3743 17.5H86.7103L86.2543 14.452H83.0143L82.5583 17.5H80.1343L82.8223 0.699999H86.6863ZM84.6223 3.676L83.3503 12.172H85.8943L84.6223 3.676ZM89.8838 17.5V0.699999H94.0598C96.6998 0.699999 97.9958 2.164 97.9958 4.852V13.348C97.9958 16.036 96.6998 17.5 94.0598 17.5H89.8838ZM94.0118 3.1H92.5238V15.1H94.0118C94.8518 15.1 95.3558 14.668 95.3558 13.468V4.732C95.3558 3.532 94.8518 3.1 94.0118 3.1ZM101.601 3.1V7.78H105.225V10.18H101.601V15.1H106.161V17.5H98.9606V0.699999H106.161V3.1H101.601ZM110.725 0.699999L112.669 12.628L114.469 0.699999H118.141V17.5H115.645V5.452L113.821 17.5H111.325L109.357 5.62V17.5H107.053V0.699999H110.725ZM121.813 17.5V11.932L118.477 0.699999H121.237L123.253 8.356L125.269 0.699999H127.789L124.453 11.932V17.5H121.813Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            <div className="header__menu">
              <ul className="menu__list">
                <li
                  className="menu__item"
                  onClick={() => {
                    smoothScroll("about");
                  }}
                >
                  Обо мне
                </li>
                <li
                  className="menu__item"
                  onClick={() => {
                    smoothScroll("gallery");
                  }}
                >
                  Кейсы
                </li>
                <li
                  className="menu__item"
                  onClick={() => {
                    smoothScroll("programme");
                  }}
                >
                  Программа
                </li>
                <li
                  className="menu__item"
                  onClick={() => {
                    smoothScroll("reviews");
                  }}
                >
                  Отзывы
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  };
  return (
    <div className="App">
      <div id="root">
        <div className="page" id="page">
          <Header />
          <CSSTransition
            nodeRef={headerRef}
            in={fixedBannerIsShown}
            timeout={800}
            classNames="slide"
            unmountOnExit
          >
            {fixedHeader()}
          </CSSTransition>
          <Hero />
          <Info />
          <About />
          <Clients />
          <Gallery data={short} />
          <Gallery data={documentaries} />
          <Gallery data={podcasts} />
          <WillLearn data={willLearn} />
          <HowItGoes data={how} />
          <Programme data={programme} />
          <Rates data={rates} />
          <Reviews data={reviews} />
          <Subscription />
          <Goal />
          <Footer />
          <FixedMenu />
        </div>
      </div>
    </div>
  );
}

export default Main;
