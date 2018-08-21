$( window ).load(function() {


  //START subnav
  $('.new-stories-nav ul li').click(function(){
    //reset nav
    // toggle active
    if ($(this).hasClass("active")) {
      $('.new-stories-nav ul li').removeClass("active");
      $('.new-stories-nav ul').removeClass("menu-border-on");
      //alert("poo");
    } else {
      $('.new-stories-nav ul li').removeClass("active");
      $(this).addClass("active");
      $('.new-stories-nav ul').addClass("menu-border-on");
    }
  });
  // END subnav
  window.onscroll = function (e) {
    //alert(0);
    $(".guides-cover .left").addClass("slide-up");
    $(".guides-cover .right").addClass("slide-down");
    setTimeout(function(){
      $(".guides-cover").hide();
    }, 420);

  }


  // show toc at mobile
  $('.toc-mobile-btn').click(function(){
    if ( $(".guides-toc").hasClass("mobile-nav-hidden") ) {
      $(".guides-toc").removeClass("mobile-nav-hidden");
      $(".guides-toc").addClass("mobile-nav-showing");
    }
  });
  // hide toc at mobile
  $('.close-toc-mobile').click(function(){
    if ( $(".guides-toc").hasClass("mobile-nav-showing") ) {
      $(".guides-toc").addClass("mobile-nav-hidden");
      $(".guides-toc").removeClass("mobile-nav-showing");
    }
  });


  $('.btn-close-guides-menu').click(function(){
    $("#all-guides").fadeOut();
    $(".toc-wrap").removeClass("slide-left");
  });

// show all guides
  $('.btn-all-guides').click(function(){
    $("#all-guides").fadeIn();
    $(".toc-wrap").addClass("slide-left");
  });

  $('.btn-close-guides-menu').click(function(){
    $("#all-guides").fadeOut();
    $(".toc-wrap").removeClass("slide-left");
  });

  $('.toc-item').click(function(){
    $(".toc-item").removeClass("active");
    $(this).addClass("active");
    $("section.guides-body").addClass("hidden");
    chapNum = this.dataset.chapter;
    $("section.chapter-" + chapNum).removeClass("hidden");
  });

});
