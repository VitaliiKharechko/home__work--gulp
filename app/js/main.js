let header = document.querySelector(".header__container");
let headerH = document.querySelector(".header__container").clientHeight;

console.log(headerH);

document.onscroll = function () {
  let scroll = window.scrollY;
  if (scroll > headerH) {
    header.classList.add("header__container--fixed");
  } else {
    header.classList.remove("header__container--fixed");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".menu__link");

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      menuLinks.forEach((item) => {
        item.classList.remove("active");
      });

      this.classList.add("active");
    });
  });
});

$(function () {
  $(".review__slider").slick({
    arrows: true,
    dots: true,
  });
});
var mixer = mixitup(".popular__list, menu__list");
