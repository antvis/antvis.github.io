$(function() {
  var toTop = {
    init: function() {
      $('#toTop').click(function() {
        $("html, body").animate({
          scrollTop: 0
        }, 120);
      });
      $(window).bind("scroll", this.backToTopFun);
      this.backToTopFun();
    },
    backToTopFun: function() {
      var st = $(document).scrollTop(),
        winh = $(window).height();
      var $toTop = $('#toTop');

      (st > winh) ? $toTop.show(): $toTop.hide();
    }
  };
  toTop.init();

  var disabled = $('.disabled');
  disabled.click(function(event) {
    event.preventDefault();
  });

  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var header = $('header#header');
  var headerHeight = header.outerHeight();

  function hasScrolled() {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta)
      return;

    if (st > lastScrollTop && st > headerHeight) {
      header.addClass('to-up');

    } else {
      if (st + $(window).height() < $(document).height()) {
        header.removeClass('to-up');
      }
    }
    lastScrollTop = st;
  }
  // demo 右侧导航栏交互
  $(window).scroll(function() {
    if ($('.main-container')[0].getBoundingClientRect().top <= 0) {
      $('#J_navMenu').addClass('nav-menu-fixed');
      $('.doc-nav').addClass('nav-menu-fixed');
    } else {
      $('#J_navMenu').removeClass('nav-menu-fixed');
      $('.doc-nav').removeClass('nav-menu-fixed');
    }

    if (!$('#J_navMenu').hasClass('animating')) {
      $('.doc-content.demo-doc h4').each(function(index, ele) {
        if (ele.getBoundingClientRect().top > 0 && ele.getBoundingClientRect().top <= 120) {
          var id = 'demo' + ele.id;
          $('a#' + id).parent().addClass('active').siblings().removeClass('active');;
        }
      });

      $('.body-content.tutorial-body-content h2, .body-content.tutorial-body-content h3, .body-content.api-body-content h2, .body-content.api-body-content h3, .doc-content.vis-chart h2, .doc-content.vis-chart h3').each(function(index, ele) {
        if (ele.getBoundingClientRect().top > 0 && ele.getBoundingClientRect().top <= 60) {
          var id = ele.id;
          $('a#' + id).parent().addClass('active').siblings().removeClass('active');
        }
      });
    }
  });

  /*$('#tipue_search_input').tipuesearch({
    'mode': 'live',
    'liveDescription': '.doc-content',
    'liveContent': '.doc-content'
  });*/

  var mainHeight = $('.body-content').height();
  var height = $('body').height() - $('#header').height();
  if (mainHeight < height) {
    $('.body-content').css('height', height);
  }
});
