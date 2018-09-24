$( window ).load(function() {

  var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

  var hamburgers = document.querySelectorAll(".hamburger");
  if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
      hamburger.addEventListener("click", function() {
        this.classList.toggle("is-active");
        $(".new-stories-nav").toggle("slideSubNav");
        $(".main-dropdown").toggleClass("opacity-up");
        $('.new-stories-nav ul li').removeClass("active");
        $('.new-stories-nav ul').removeClass("menu-border-on");
      }, false);
    });
  }


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
