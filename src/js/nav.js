// $(document).ready(function () {
//   $(".btn--mobile-menu").click(function () {
//     $(".nav-mobile").toggleClass("open");
//     $(".container-nav").toggleClass("open");
//   });
// });

const btnNavEl = document.querySelector(".btn--mobile-menu");
const headerEl = document.querySelector(".nav");
const navmobileEl = document.querySelector(".nav-mobile");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  navmobileEl.classList.toggle("nav-open");
});
