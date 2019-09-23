$( document ).ready(function() {

  if ($("html").scrollTop() < $(".fake-inman-nav").innerHeight()) {
    $('html, body').animate({
        scrollTop: $('.inman-logo-bw').offset().top
    }, 'slow');
  }


  //$( 'html, body' ).scrollTop( -300 );


  $('body[data-controller="style_guide"] a').click(function(){
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
  $("#btn-toggle-mobile").click( function () {
    toggleMobile();
  });


});
