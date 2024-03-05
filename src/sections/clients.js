import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Clients() {
  const clients_first = [
    { alias: "yandex", url: require("../images/clients/yandex.webp") },
    { alias: "tinkoff", url: require("../images/clients/tinkoff.webp") },
    { alias: "ingosstrah", url: require("../images/clients/ingosstrah.webp") },
    { alias: "megamarket", url: require("../images/clients/megamarket.webp") },
  ];
  const clients_second = [
    { alias: "mts", url: require("../images/clients/mts.webp") },
    { alias: "bitrix", url: require("../images/clients/bitrix.webp") },
    { alias: "kaspersky", url: require("../images/clients/kaspersky.webp") },
    { alias: "modulbank", url: require("../images/clients/modulbank.webp") },
  ];

  useEffect(() => {
    const scrollContainer = document.getElementById("clients-scroll");
    const scrollContainerScnd = document.getElementById("clients-scroll-scnd");
    const page = document.querySelector(".page");
    page.addEventListener(
      "wheel",
      (event) => {
        let maxScroll =
          scrollContainer.scrollWidth - scrollContainer.offsetWidth;
        let currentScroll = scrollContainer.scrollLeft + event.deltaY;

        if (currentScroll > 0 && currentScroll < maxScroll) {
          // event.preventDefault();
          scrollContainer.scrollLeft = currentScroll;
        } else if (currentScroll <= 0) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft = maxScroll;
        }
      },
      { passive: true }
    );

    page.addEventListener(
      "wheel",
      (event) => {
        let maxScroll =
          scrollContainerScnd.scrollWidth - scrollContainerScnd.offsetWidth;
        let currentScroll = scrollContainerScnd.scrollLeft + event.deltaY;

        if (currentScroll > 0 && currentScroll < maxScroll) {
          // event.preventDefault();
          setTimeout(function () {
            scrollContainerScnd.scrollLeft = currentScroll;
          }, 500);
        } else if (currentScroll <= 0) {
          scrollContainerScnd.scrollLeft = 0;
        } else {
          scrollContainerScnd.scrollLeft = maxScroll;
        }
      },
      { passive: true }
    );
  });

  return (
    <div className="container">
      <section className="section clients">
        <h1 className="section__title clients__title dita">Мои клиенты</h1>
        <div className="clients__list-container">
          {" "}
          <ul className="clients__list" id="clients-scroll">
            {clients_first &&
              clients_first.map((client, index) => (
                <li className="clients__item" key={client.alias}>
                  <LazyLoadImage
                    alt={client.alias}
                    height={"100%"}
                    src={client.url}
                    width={"100%"}
                  />
                </li>
              ))}
          </ul>
          <ul className="clients__list" id="clients-scroll-scnd">
            {clients_second &&
              clients_second.map((client) => (
                <li className="clients__item" key={client.alias}>
                  <LazyLoadImage
                    alt={client.alias}
                    height={"100%"}
                    src={client.url}
                    width={"100%"}
                  />
                </li>
              ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Clients;
