import programme from "../content/programme";

function Programme() {
  return (
    <div className="container">
      <section className="section programme" id="programme">
        <h1 className="section__title programme__title dita">
          {" "}
          {programme.title}
        </h1>
        <div className="programme__block">
          <div className="programme__block-left">
            <ul className="programme__list">
              {" "}
              {programme &&
                programme.left.map((item, index) => (
                  <li className="programme__item" key={index}>
                    <div className="programme__module">
                      <p className="subtitle bebas">{index + 1} Модуль</p>
                      <div className="programme__divider"></div>
                    </div>

                    <div
                      className="programme__description
              "
                    >
                      <div className="subtitle bebas programme__subtitle">
                        {item.title}
                      </div>
                      <p className="programme__text">{item.desc}</p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <div className="programme__block-right">
            {" "}
            <ul className="programme__list">
              {" "}
              {programme &&
                programme.right.map((item, index) => (
                  <li className="programme__item" key={index}>
                    <div className="programme__module">
                      <p className="subtitle bebas">{index + 5} Модуль</p>
                      <div className="programme__divider"></div>
                    </div>

                    <div
                      className="programme__description
              "
                    >
                      <div className="subtitle bebas programme__subtitle">
                        {item.title}
                      </div>
                      <p className="programme__text">{item.desc}</p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Programme;
