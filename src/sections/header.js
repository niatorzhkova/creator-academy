function Header() {
  const smoothScroll = (section) => {
    const block = document.getElementById(section);
    block.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "start",
    });
  };

  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header__logo-container">
            <div className="logo bebas">creator academy</div>
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
}

export default Header;
