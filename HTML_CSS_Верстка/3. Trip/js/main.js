const owl = $('.owl-carousel');
owl.owlCarousel({
  center: true,
  startPosition: 1,
  loop: true,
  margin: 30,
  item:3
});

$('.slader_btn_prev').click(function() {
  owl.trigger('prev.owl.carousel');
})

$('.slader_btn_next').click(function() {
    owl.trigger('next.owl.carousel');
})
