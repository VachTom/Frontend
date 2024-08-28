const owl = $(".owl-carousel");
owl.owlCarousel({
  center: true,
  startPosition: 1,
  loop: true,
  margin: 30,
  item: 3,
  responsive: {
    1000: {
      margin: 20,
    },
    1200: {
      margin: 30,
    },
  },
});

$(".slader_btn_prev").click(function () {
  owl.trigger("prev.owl.carousel");
});

$(".slader_btn_next").click(function () {
  owl.trigger("next.owl.carousel");
});

const navBnt = document.querySelector(".nav_toggle");
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector("nav");

menuIcon.onclick = function () {
  menuIcon.classList.toggle("menu-icon--active");
  nav.classList.toggle("nav--mobile");
};
