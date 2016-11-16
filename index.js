$(document).ready(function () {
  $('header').hide().slideDown(3000);
});

$(document).ready(function () {
  $('.slider').hide().slideDown(2500);
});

$(function () {
  var $headerNavLi = $('.header-nav li').has('ul');
  $headerNavLi.find('a').on('click', function (e) {
    e.preventDefault();
    $(this).closest('li').toggleClass('opened');
  });
});
