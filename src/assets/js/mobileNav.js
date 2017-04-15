$('a[href^="#"]').on('click', function (event) {

  var target = $($(this).attr('href'));

  if (target.length) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
  }
});

$('#hamburger').click(function () {
  $('nav').toggleClass('expand');
  $('.container').toggleClass('move');
});

$('nav').click(function () {
  $('nav').toggleClass('expand');
  $('.container').toggleClass('move');
});