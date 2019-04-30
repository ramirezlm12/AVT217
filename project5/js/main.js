$(document).ready(function() {

   $('#button').click(function() {
     $('#coffee').toggleClass('open');
     console.log('clicked!');
   });
   $('#coffee').click(function() {
     $('#button').toggleClass('close');
    console.log('clicked!')
   });
   // $('.button').click(function() {
   //      var theImages = [{
   //         src: "imgs/1.png",
   //
   //       },
   //       $('.coffee').append(newImage);
   // });
});
