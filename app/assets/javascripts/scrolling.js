$(document).ready(function () {
    // Handler for .ready() called.
    if ($("html").scrollTop() < $(".fake-inman-nav").innerHeight()) {
      $('html, body').animate({
          scrollTop: $('.inman-logo-bw').offset().top
      }, 'slow');
    }
});
$( document ).ready(function() {
  //$( 'html, body' ).scrollTop( -300 );


  $('body[data-action="typography"] a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top -14
    }, 300);
    return false;
  });


  // function to toggle mobile class on body
  function toggleMobile() {
    $("body").toggleClass('mobile-styles-active');
  }
  // on click toggle the class 'mobile' to body
  $("#btn-toggle-mobile").onclick = function () {toggleMobile();};


});
