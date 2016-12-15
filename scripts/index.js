/* $(document).ready(function () {
 $('header').hide().slideDown(3000);
 });

 $(document).ready(function () {
 $('.slider').hide().slideDown(2500);
 }); */

/* menu */

$(function () {
  var $headerNavLi = $('.header-nav li').has('ul');
  $headerNavLi.find('a').on('click', function (e) {
    e.preventDefault();
    $(this).closest('li').toggleClass('opened');
  });
});

/* slider product-grid*/


$("#slider").slider({
  min: 0,
  max: 1000,
  values: [0, 1000],
  range: true,
  stop: function (event, ui) {
    $("input#minCost").val($("#slider").slider("values", 0));
    $("input#maxCost").val($("#slider").slider("values", 1));
  },
  slide: function (event, ui) {
    $("input#minCost").val($("#slider").slider("values", 0));
    $("input#maxCost").val($("#slider").slider("values", 1));
  }
});

$("input#minCost").change(function () {
  var value1 = $("input#minCost").val();
  var value2 = $("input#maxCost").val();

  if (parseInt(value1) > parseInt(value2)) {
    value1 = value2;
    $("input#minCost").val(value1);
  }
  $("#slider").slider("values", 0, value1);
});
$("input#maxCost").change(function () {
  var value1 = $("input#minCost").val();
  var value2 = $("input#maxCost").val();

  if (value2 > 1000) {
    value2 = 1000;
    $("input#maxCost").val(1000)
  }

  if (parseInt(value1) > parseInt(value2)) {
    value2 = value1;
    $("input#maxCost").val(value2);
  }
  $("#slider").slider("values", 1, value2);
});


/* slick menuNav  320px*/


$(function () {
  $('#menu').slicknav({
    prependTo: menu
  });
});

/* slick slider */

$(document).ready(function () {
  var $slider1 = $(".slider");
  $slider1.slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true
  });
  var $slider2 = $(".new-posts");
  $(".nav-new-posts .prew").on("click", function (e) {
    e.preventDefault();
    $slider2.slick("slickPrev");
  });
  $(".nav-new-posts .next").on("click", function (e) {
    e.preventDefault();
    $slider2.slick("slickNext");
  });
  $slider2.slick({
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 830,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 548,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
  var $slider3 = $(".related-products .featured-products-list");
  $(".nav-new-posts .prew").on("click", function (e) {
    e.preventDefault();
    $slider3.slick("slickPrev");
  });
  $(".nav-new-posts .next").on("click", function (e) {
    e.preventDefault();
    $slider3.slick("slickNext");
  });
  $slider3.slick({
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 830,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 548,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
});


/*$(function () {
 $("select").uniform();
 });*/

$(function () {
  $('.product-preview .some-product').slick({
    arrows: false,
    slidesToShow: 3,
    verticalSwiping: true,
    vertical: true
  });
  $('.some-product a').on('click', function (e) {
    e.preventDefault();
    var picLink = $(this).attr('href');
    $('#product-image').attr('src', picLink);
  });
});


/*$(document).ready(function () {
  var $slider4 = $(".product-image");
  $slider4.slick({
    arrows: false,
    dots: true
  });
});*/

$(function () {
  $("#single_1").fancybox({
    openEffect: 'elastic',
    closeEffect: 'elastic',

    helpers: {
      title: {
        type: 'inside'
      }
    }
  });
});
$(function () {
  $("#tabs").tabs();
});

/* col tovaru */

$(document).ready(function () {
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});



