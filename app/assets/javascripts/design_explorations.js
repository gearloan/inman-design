$( window ).load(function() {

  window.onscroll = function (e) {
    //alert(0);
    $(".guides-cover .left").addClass("slide-up");
    $(".guides-cover .right").addClass("slide-down");
    setTimeout(function(){
      $(".guides-cover").hide();
    }, 420);

  }

});
