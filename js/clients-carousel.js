$(document).ready(function () {
  // Search block with sliders
  const owl = $("#clients-slider");

  // Start carousel
  owl.owlCarousel({
    items: 1,
    loop: true,
  });

  // Search the buttons prev / next
  const prev = $("#sliderPrev");
  const next = $("#sliderNext");

  // Click on the button prev and start carousel
  prev.click(function () {
    owl.trigger("prev.owl.carousel", [300]);
  });

  // Click on the button next and start carousel
  next.click(function () {
    owl.trigger("next.owl.carousel");
  });
});
