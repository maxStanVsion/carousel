gsap.registerPlugin(MotionPathPlugin);

// SplideJS
function initSplide() {
  var splide = new Splide(".splide", {
    perPage: 3,
    focus: "center",
    arrows: false,
    pagination: false,
    gap: "64px",
  });
  splide.mount();
}

// Motion Path
function initMotionPath() {
  const slides = document.querySelectorAll(".splide__slide");
}

// 3D Carousel
function vueCarousel() {
    new Vue({
        el: '#example',
        data: {
            slides: 5
        },
        components: {
            'carousel-3d': window['carousel-3d'].Carousel3d,
            'slide': window['carousel-3d'].Slide
        }
    })
}

function initScripts() {
//   initSplide();
  vueCarousel();
}

document.addEventListener("DOMContentLoaded", initScripts);
