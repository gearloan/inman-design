$( document ).ready(function() {
  $('a').click(function(){
  $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top -14
  }, 300);
  return false;
});
});
