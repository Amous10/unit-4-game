$(document).ready(() => {


    var random_result;
    var losses = 0;
    var wins = 0;
    var guessTotal = 0;


    var resetAndStart = function () {

        $(".crystals").empty();

        var images = ['assets/images/iconfinder_Amethyst_127306.png',
            'assets/images/iconfinder_Aquamarine_127303.png',
            'assets/images/iconfinder_Opal_127313.png',
            'assets/images/iconfinder_Zircon_127304.png',
        ];

        random_result = Math.floor(Math.random() * 101) + 19;

        $("#target").html('Target Number: ' + random_result);

        for (var i = 0; i < 4; i++) {

            var random = Math.floor(Math.random() * 11) + 1;
            console.log(random);



            var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random

            });
            crystal.css({
                "background-image": "url('" + images[i] + "')",
            })

            $(".crystals").append(crystal);
        }

        $("#guessTotal").html("Total Score: " + guessTotal);

    }

    resetAndStart();

    // event delegation 

    $(document).on('click', ".crystal", function () {


        var num = parseInt($(this).attr('data-random'));

        guessTotal += num;

        $("#guessTotal").html("Total Score: " + guessTotal);


        if (guessTotal > random_result) {

            losses++;

            $("#losses").html("Losses: " + losses);

            guessTotal = 0;

            resetAndStart();

        } else if (guessTotal === random_result) {

            wins++;

            $("#wins").html("Wins: ", +wins);

            guessTotal = 0;

            resetAndStart();


        }

    });

})