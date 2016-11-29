/* $(document).ready(function () {
 $('header').hide().slideDown(3000);
 });

 $(document).ready(function () {
 $('.slider').hide().slideDown(2500);
 }); */

$(function () {
  var $headerNavLi = $('.header-nav li').has('ul');
  $headerNavLi.find('a').on('click', function (e) {
    e.preventDefault();
    $(this).closest('li').toggleClass('opened');
  });
});

$("#slider").slider({
  min: 0,
  max: 1000,
  values: [0,1000],
  range: true,
  stop: function(event, ui) {
    $("input#minCost").val(jQuery("#slider").slider("values",0));
    $("input#maxCost").val(jQuery("#slider").slider("values",1));
  },
  slide: function(event, ui){
    jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
    jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
  }
});

jQuery("input#minCost").change(function(){
  var value1=jQuery("input#minCost").val();
  var value2=jQuery("input#maxCost").val();

  if(parseInt(value1) > parseInt(value2)){
    value1 = value2;
    jQuery("input#minCost").val(value1);
  }
  jQuery("#slider").slider("values",0,value1);
});


jQuery("input#maxCost").change(function(){
  var value1=jQuery("input#minCost").val();
  var value2=jQuery("input#maxCost").val();

  if (value2 > 1000) { value2 = 1000; jQuery("input#maxCost").val(1000)}

  if(parseInt(value1) > parseInt(value2)){
    value2 = value1;
    jQuery("input#maxCost").val(value2);
  }
  jQuery("#slider").slider("values",1,value2);
});

/*$(document).ready(function() {

 $("#buy_price").slider({
 range: true,
 min: 500, // минимальное значение цены
 max: 120000, // максимальное значение цены
 step: 1500, // шаг слайдера
 values: [ 1500, 100000],  // начальные значения - позиции ползунков на шкале

 slide: function( event, ui ) {
 $( "input[name=price_s]" ).val(  ui.values[ 0 ] ); // выводим  значение от
 $( "input[name=price_f]" ).val(  ui.values[ 1 ] ); // выводим  значение до
 },
 stop: function(event, ui) { show(); } // выполняем действие  после остановки ползунка, в нашем случае функция show
 });

 });
 */
$(function () {
  $('#menu').slicknav({
    prependTo: menu
  });
});
$(document).ready(function () {
  var $slider1 = $(".slider");
  $slider1.slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true
  });

  /*var $slider2 = $(".new-posts");
  $(".nav-nev-post .prew").on("click", function (e) {
    e.preventDefault();
    $slider2.slick("slick.prev");
  });
  $(".nav-nev-post .next").on("click", function (e) {
    e.preventDefault();
    $slider2.slick("slick.next");
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
  });*/
});
