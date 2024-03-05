import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function WillLearn({ data }) {
  useEffect(() => {
    const box = document.getElementById("learn-container");

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
      <section className="section learn">
        <h1 className="section__title dita learn__title">{data.title}</h1>
        <div className="learn__block">
          <ul className="learn__list" id="learn-container">
            {data &&
              data.list.map((item) => (
                <li key={item.text} className="learn__item">
                  <div className="learn__picture">
                    <LazyLoadImage
                      alt={item.text}
                      height={"100%"}
                      src={item.pic}
                      width={"100%"}
                      wrapperClassName="learn__img"
                    />
                  </div>
                  <div className="subtitle learn__description bebas">
                    {item.text}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default WillLearn;
