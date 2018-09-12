//crystal game involving 4 crystals and a random number
//new random number after each game for the crystals and starter number
//counter for crystals to show what they add up to if they dont go over the total score
//every crystal needs a random number 1-12
//random number shown at the start of the game should be between 19-120
//clicking any crystal should add with previous crystal
//until if equals the total score
//if it is equal, then we increment a win counter
//


// array to hold random value to choose for random number

var randomResult;
var win;
var loss;

$(document).ready(function() {
    
for(var i = 0; i < 4; i++){

    var random = Math.floor(Math.random() * 12);
    console.log(random);
    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "date-random": random
        });
    
        $(".crystals").append(crystal);

}
});

