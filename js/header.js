let header = document.querySelector("#home-header");

let scrollLimit = 70;

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
