let header = document.querySelector(".header");

let scrollLimit = 60;

document.addEventListener(
  "scroll",
  {
    handleEvent: function () {
      if (window.scrollY > scrollLimit) {
        header.classList.add("header-onscroll");
      } else {
        header.classList.remove("header-onscroll");
      }
    },
  },
  true
);
