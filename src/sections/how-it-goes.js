function HowItGoes({ data }) {
  return (
    <div className="container">
      <section className="section how">
        <div className="how__top">
          {" "}
          <h1 className="section__title dita how__title">{data.title}</h1>
          <div className="how__block">
            <ul className="how__list">
              {" "}
              {data &&
                data.list.map((item) => (
                  <li key={item.text} className="how__item">
                    <div className="subtitle how__description bebas">
                      {item.text}
                    </div>
                  </li>
                ))}
            </ul>
            <ul className="how__list">
              {" "}
              {data &&
                data.list_right.map((item) => (
                  <li key={item.text} className="how__item">
                    <div className="subtitle how__description bebas">
                      {item.text}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <ul className="how__bottom">
          <li className="how__img-container">
            <img
              src={require(`../images/how/1.png`)}
              alt="Как проходит обучение"
            />
          </li>
          <li className="how__img-container">
            <img
              src={require(`../images/how/2.png`)}
              alt="Как проходит обучение"
            />
          </li>
        </ul>
      </section>
    </div>
  );
}

export default HowItGoes;
