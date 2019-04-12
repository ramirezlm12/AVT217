// $(document).ready(function() {
//     var number = Math.floor(Math.random() * 1000001);
//     console.log(number);
//     var guesses = '';
//     $('#submit').click(function() {
//         var guess = $('input').val();
//         guesses += guess + ' ';
//         $('.guesses p').text(guesses);
//         console.log(guess);
//         if (number == guess) {
//             $('h1').text(number + ' is right!');
//             $('input').val('');
//         } else if (number < guess) {
//             $('h1').text(guess + ' is too high');
//             $('input').val('')
//         } else {
//             $('h1').text(guess + ' is too low');
//             $('input').val('');
//         }
//     });
// });
$(document).ready(function() {
    // run function on initial page load
    snackGuess();
});

function snackGuess() {
    var snackArray = ["carrots","pickles","kale","Dorritos","Apples","Berries","Hummus","avocado"];
    var randomNumber = Math.floor(Math.random() * snackArray.length);
    var stripped = snackArray[randomNumber].toLowerCase();
    console.log(snackArray[randomNumber]);
    console.log(stripped);
    $('#submit').click(function() {
        var input = $('input').val();
        var guess = input.toLowerCase();
        console.log(guess);
        if (guess == stripped || guess == snackArray[randomNumber]) {
            $('h1').text(guess + ' ...nah, not today!');
            $('input').val('');
            $('.button p').text('Play Again?');
            $('#submit').click(function() {
                location.reload(true);
            });
        } else  {
            $('h1').text(guess + ' sounds good');
            $('input').val('');
            $('.button p').text('Play Again?');
            $('#submit').click(function() {
                location.reload(true);
            });
        }
    })
}
