// Скролл до секций

function handleClickLink(event) {
  const block = event.currentTarget.dataset.block;
  document
    .getElementById(block)
    .scrollIntoView({ behavior: "smooth", inline: "center", block: "start" });
}

document.querySelectorAll(".menu__item").forEach((elem) => {
  elem.addEventListener("click", handleClickLink);
});
const bookBtn = document.querySelector(".book-btn");
bookBtn.addEventListener("click", handleClickLink);

// Всплывающее меню

function showFixedBanner() {
  const currentScroll = window.scrollY || document.documentElement.scrollTop;
  if (currentScroll > 700) {
    $(".header-fixed").removeClass("hidden");
    $(".header-fixed").addClass("shown");
  } else {
    $(".header-fixed").removeClass("shown");
    $(".header-fixed").addClass("hidden");
  }
}

window.addEventListener("scroll", _.throttle(showFixedBanner, 250));

// Скролл клиентов

const scrollContainer = document.getElementById("clients-scroll");
const scrollContainerScnd = document.getElementById("clients-scroll-scnd");
const page = document.querySelector(".page");

function handleClientsScroll(event) {
  // первая строчка клиентов
  let maxScroll = scrollContainer.scrollWidth - scrollContainer.offsetWidth;
  let currentScroll = scrollContainer.scrollLeft + event.deltaY;

  if (currentScroll > 0 && currentScroll < maxScroll) {
    scrollContainer.scrollLeft = currentScroll;
  } else if (currentScroll <= 0) {
    scrollContainer.scrollLeft = 0;
  } else {
    scrollContainer.scrollLeft = maxScroll;
  }
  // втораястрочка клиентов
  let maxScrollScnd =
    scrollContainerScnd.scrollWidth - scrollContainerScnd.offsetWidth;
  let currentScrollScnd = scrollContainerScnd.scrollLeft + event.deltaY;

  if (currentScrollScnd > 0 && currentScrollScnd < maxScrollScnd) {
    setTimeout(function () {
      scrollContainerScnd.scrollLeft = currentScrollScnd;
    }, 300);
  } else if (currentScrollScnd <= 0) {
    scrollContainerScnd.scrollLeft = 0;
  } else {
    scrollContainerScnd.scrollLeft = maxScrollScnd;
  }
}
window.addEventListener("touchmove", _.throttle(handleClientsScroll, 100));

// Скролл отзывов

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

// Скролл "Вы научитесь"

const boxLearn = document.getElementById("learn-container");

let isDownLearn = false;
let startXLearn;
let scrollLeftLearn;

boxLearn.addEventListener("mousedown", (e) => {
  isDownLearn = true;
  startXLearn = e.pageX - boxLearn.offsetLeft;
  scrollLeftLearn = boxLearn.scrollLeft;
  boxLearn.style.cursor = "grabbing";
});

boxLearn.addEventListener("mouseleave", () => {
  isDownLearn = false;
  boxLearn.style.cursor = "grab";
});

boxLearn.addEventListener("mouseup", () => {
  isDownLearn = false;
  boxLearn.style.cursor = "grab";
});

document.addEventListener("mousemove", (e) => {
  if (!isDownLearn) return;
  e.preventDefault();
  const x = e.pageX - boxLearn.offsetLeft;
  const walkXLearn = x - startXLearn;
  boxLearn.scrollLeft = scrollLeftLearn - walkXLearn;
});

// Youtube player

var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "100%",
    width: "100%",
    videoId: "M7lc1UVf-VE",
    events: {
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerStateChange(event) {}
function stopVideo() {
  player.stopVideo();
}

function handleYoutubeClick(event) {
  console.log(event.currentTarget.dataset, "target dataset");
  const link = event.currentTarget.dataset.link;
  loadVideo(link);
  const modalOverlay = document.querySelector(".modal-component");
  modalOverlay.setAttribute("style", "display:block;");
}
function loadVideo(videoId) {
  player.loadVideoByUrl(videoId);
  player.playVideo();
}
function handleCloseModal(event) {
  stopVideo();
  const modalOverlay = document.querySelector(".modal-component");
  modalOverlay.setAttribute("style", "display:none;");
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".play-btn").forEach((elem) => {
    elem.addEventListener("click", handleYoutubeClick);
  });
});

document.querySelectorAll(".modal__close").forEach((elem) => {
  elem.addEventListener("click", handleCloseModal);
});
