import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Reviews({ data }) {
  useEffect(() => {
    const box = document.getElementById("reviews-container");

    let isDown = false;
    let startX;
    let scrollLeft;

    box.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - box.offsetLeft;
      scrollLeft = box.scrollLeft;
      box.style.cursor = "grabbing";
    });

    box.addEventListener("mouseleave", () => {
      isDown = false;
      box.style.cursor = "grab";
    });

    box.addEventListener("mouseup", () => {
      isDown = false;
      box.style.cursor = "grab";
    });

    document.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - box.offsetLeft;
      const walkX = x - startX;
      box.scrollLeft = scrollLeft - walkX;
    });
  });
  return (
    <div className="container">
      <section className=" section reviews" id="reviews">
        <h1 className="section__title dita">{data.title}</h1>
        <div className="reviews__block">
          <ul className="reviews__list" id="reviews-container">
            {data &&
              data.list.map((item, index) => (
                <li key={index} className="reviews__item">
                  <div className="reviews__desc">
                    <h2 className="review__title montserrat">{item.title}</h2>
                    <p className="review__text">{item.text}</p>
                  </div>
                  <div className="review__user">
                    <div className="review__photo">
                      <LazyLoadImage
                        alt={"Фотография автора отзыва"}
                        height={"100%"}
                        src={item.user.photo}
                        width={"100%"}
                        wrapperClassName="gallery__img"
                      />
                    </div>
                    <div className="review__user-info">
                      <div className="review__user-name montserrat">
                        {item.user.name}
                      </div>
                      <p className="review__user-occupation montserrat">
                        {item.user.position}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Reviews;
