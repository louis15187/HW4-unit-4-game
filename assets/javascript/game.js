//Waits until the HTML is loaded to run the function//
$(document).ready(function() {

    //images// 
    crystals = ['assets/images/red.jpg', 'assets/images/blue.jpg', 'assets/images/yellow.jpg', 'assets/images/green.png'];

    //Counting of Wins and Loses//
    var counter = 0;
    var wins = 0;
    var losses = 0;
    $('#win').text(wins);
    $('#loss').text(losses);

    //Resets new game//
    newCrystals();
    newGame();

    //Inserts numbers under the crystals and console logs the 4 numbers from 1 to 12//
    function newCrystals() {
        var numbers = []
        while (numbers.length < 4) {
            var randomnumber = Math.ceil(Math.random() * 12)
            var found = false;
            for (var i = 0; i < numbers.length; i++) {
                if (numbers[i] == randomnumber) {
                    found = true;
                    break
                }
            }
            if (!found) numbers[numbers.length] = randomnumber;
        }
        console.log(numbers);

        //Allows the crystals to appear on the page and take up attributes above//
        for (i = 0; i < numbers.length; i++) {
            var imageCrystal = $('<img>');
            imageCrystal.attr('data-num', numbers[i]);
            imageCrystal.attr('src', crystals[i]);
            imageCrystal.attr('alt', 'crystals');
            imageCrystal.addClass('crystalImage')
            $('#crystals').append(imageCrystal);
        }
    }

    function newGame() {

        //Logs your score//
        counter = 0;
        $('#yourScore').text(counter);

        //random number function appears//
        function randomIntFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        //Returns an integer between 19-190//
        var numberToGuess = randomIntFromInterval(19, 120);

        //Number Value//
        $('.value').text(numberToGuess);

        //When crystal is clicked numbers will add until the Number is reached//
        $('.crystalImage').on('click', function() {
            counter = counter + parseInt($(this).data('num'));

            //Keeps in mind the max//
            $('#yourScore').text(counter);

            //Logs your win on the page and console logs the win as well and resets new game//
            if (counter == numberToGuess) {
                $('#status').text('You won!!!!');
                wins++;
                $('#win').text(wins);
                console.log(wins)
                $('#crystals').empty();
                newCrystals();
                newGame();

                //Logs your loss on the page and console logs the loss as well and resets new game//
            } else if (counter > numberToGuess) {
                $('#status').text('You lost!')
                losses++;
                $('#loss').text(losses);
                console.log(losses)
                $('#crystals').empty();
                newCrystals();
                newGame();
            }
        });
    }

});