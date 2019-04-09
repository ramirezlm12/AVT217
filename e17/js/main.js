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
    colorGuess();
});

function colorGuess() {
    var colorArray = ["carrots","pickles","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
    var randomNumber = Math.floor(Math.random() * snack.length);
    var stripped = colorArray[randomNumber].toLowerCase();
    console.log(colorArray[randomNumber]);
    console.log(stripped);
    $('body').css('background-color', colorArray[randomNumber]);
    $('#submit').click(function() {
        var input = $('input').val();
        var guess = input.toLowerCase();
        console.log(guess);
        if (guess == stripped || guess == colorArray[randomNumber]) {
            $('h1').text(guess + ' is right!');
            $('input').val('');
            $('.button p').text('Play Again?');
            $('#submit').click(function() {
                location.reload(true);
            });
        } else  {
            $('h1').text(guess + ' is wrong');
            $('input').val('');
            $('.button p').text('Play Again?');
            $('#submit').click(function() {
                location.reload(true);
            });
        }
    })
}
