/*$(document) .ready(function() {
  $('slyder').hide().slideDown(30500);
});*/
/*var firstN = 'Ivan';
var lastM = 'Kruk';
document.write('<p>');
document.write (firstN + '' + lastM);
document.write('</p>');
*/

$(document) .ready(function () {
  $('header') .hide() .slideDown(3000);
});

$(document) .ready(function () {
  $('.slider') .hide() .slideDown(3000);
});

$(function(){
  var $headerNevLink = $ (".header-nav a");

  $headerNevLink.on('click', function (e){
    e.preventDefault();
    $(this).toggleClass ('opened');
    })




} )
