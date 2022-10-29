$(document).ready(function() {
  $('#autoWidth').lightSlider({
    autoWidth: true,
    loop: true,
    speed: 600, //ms'
    auto: true,
    pause: 3000,

    onSliderLoad: function() {
      $('#autoWidth').removeClass('cs-hidden');
    }
  });
});
$(".menu").click(
  function() {
    $(".menu").toggleClass("close");
    $(".full-wrapper").toggleClass("wrapper-mobile");
  }
);

var mybutton = document.getElementsByClassName('up-arrow')
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800) {
    $(mybutton).css('display', 'block').delay(4500).fadeOut(500);
    // setTimeout(function() {
    //   $(mybutton).css('display', 'block').hide();
    // }, 2000);

  } else {
    $(mybutton).css('display', 'none');
  }
}
$(mybutton).hover(function(){
    scrollFunction();
});

function topFunction() {
  document.body.scrollTop = 0; // for safari
  document.documentElement.scrollTop = 0;

}
