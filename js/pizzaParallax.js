function parallax() {
  let images = document.querySelectorAll("#pizza-divider img");
  new simpleParallax(images, {
    scale: 1.5,
  });
}

parallax();
