$(document).ready(function() {
  $('#number5').click(function() {
  $('#number5').css('color','#F77F00');
  $('#movie-5').toggleClass('blue');
  $('number5').toggleClass('white');
  });
  $('#number4').click(function() {
  $('#movie-4').hide();
  });
  $('#number3').click(function() {
  $('#movie-3').fadeTo('slow','0.10');
  });
  $('#number2').hover(function() {
  $('#number2').toggleClass('shiftText');
   });
   $('#number1').click(function() {
   $('#movie-1').toggleClass('bigger');
   });

});
