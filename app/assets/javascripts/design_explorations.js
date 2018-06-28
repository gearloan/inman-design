$( window ).load(function() {

  window.onscroll = function (e) {
    //alert(0);
    $(".guides-cover .left").addClass("slide-up");
    $(".guides-cover .right").addClass("slide-down");
    setTimeout(function(){
      $(".guides-cover").hide();
    }, 420);

  }

  $('.btn-all-guides').click(function(){
    $("#all-guides").fadeIn();
  });

  $('.btn-close-guides-menu').click(function(){
    $("#all-guides").fadeOut();
  });

  $('.toc-item').click(function(){
    $("section.guides-body").addClass("hidden");
    chapNum = this.dataset.chapter;
    $("section.chapter-" + chapNum).removeClass("hidden");
  });

});
