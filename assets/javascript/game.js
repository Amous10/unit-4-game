$(document).ready(() => {

    // global variable
    var random_result;
    var losses = 0;
    var wins = 0;
    var guessTotal = 0;

    //created function to start game and reset values and clear counters
    var resetAndStart = function () {

        //this will clear any previous values that were added from playing the game/calling functions
        $(".crystals").empty();

        //created array of local images from folder
        var images = ['assets/images/iconfinder_Amethyst_127306.png',
            'assets/images/iconfinder_Aquamarine_127303.png',
            'assets/images/iconfinder_Opal_127313.png',
            'assets/images/iconfinder_Zircon_127304.png',
        ];

        //created number array from 19 to 120
        random_result = Math.floor(Math.random() * 101) + 19;

        $("#target").html('Target Number: ' + random_result);

        //created for loop to make 4 variables
        for (var i = 0; i < 4; i++) {
            //create random value from 1 to 12
            var random = Math.floor(Math.random() * 11) + 1;

            // created variable for loop creating 4 crystals and assign string value and make it a class
            // assigned random value from above to crystal
            var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });

            //passes images through from local array above
            crystal.css({
                "background-image": "url('" + images[i] + "')",
            })
            //this adds the number of crystal images from array through loop (4)
            $(".crystals").append(crystal);
        }
        //writes running total to html
        $("#guessTotal").html("Total Score: " + guessTotal);
        // $("#losses").html("Losses: " + losses);
        // $("#wins").html("Wins: " + wins);
    }

    resetAndStart();

    //creating click event for all crystal
    $(document).on('click', ".crystal", function () {
        
        //turns number string into actual value
        var num = parseInt($(this).attr('data-random'));

        //adds the number value to itself every time clicked
        guessTotal += num;

        //write to html
        $("#guessTotal").html("Total Score: " + guessTotal);

        //if guesses go over, adds a loss, writes to html, restarts game and counters
        if (guessTotal > random_result) {

            losses++;

            $("#losses").html("Losses: " + losses);

            // guessTotal = 0;

            resetAndStart();

        //if guesses equal target number, adds a win, writes to html, restarts game and counters    
        } else if (guessTotal === random_result) {

            wins++;

            $("#wins").html("Wins: " + wins);

            console.log(wins);
            
            // guessTotal = 0;

            resetAndStart();
        }

    });

})