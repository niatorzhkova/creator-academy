import RoundBtn from "../components/round_btn";

function Gallery({ data }) {
  return (
    <div className="container">
      <section className="section gallery" id="gallery">
        <h1 className="section__title dita gallery__title">{data.title}</h1>
        <h1 className="section__title dita gallery__title-mobile">
          {data.title_mobile}
        </h1>
        <div className="gallery__block">
          <ul className="gallery__list">
            {data &&
              data.list.map((item, index) => (
                <li key={index} className="gallery__item">
                  <div className="gallery__picture">
                    <img
                      className="gallery__img"
                      alt={item.subtitle}
                      src={item.pic}
                    />

                    <a
                      className="gallery__button"
                      href={item.button_url}
                      target="_blank"
                      rel="noreferrer noopenner"
                    >
                      <RoundBtn />
                    </a>
                  </div>
                  <div className="subtitle gallery__subtitle bebas">
                    {item.subtitle}
                  </div>
                  <p className="gallery__description montserrat">
                    {item.description}
                  </p>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
