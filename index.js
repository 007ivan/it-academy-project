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


$(document).ready(function() {

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
