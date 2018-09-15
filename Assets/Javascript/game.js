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

var random_result;
var win = 0;
var lost = 0;
var previous = 0;
 

$(document).ready(function() {



//result isnt using min
var resetAndStart = function function_name(){
    
    $(".crystals").empty();

    var images = [
    'https://i.pinimg.com/originals/6e/91/46/6e9146efb8487faff07a36dc41f68bfa.gif',
    'https://68.media.tumblr.com/44cb3e3115039f4167440687f92aca45/tumblr_ofgsdj5fvk1vsjcxvo1_540.gif',
    'https://hbimg.b0.upaiyun.com/2eb639dcd451a97d1d5ff5273a3f4774af8914ba2f4f7f-fqMXhJ',
    'https://i.giphy.com/Z06UFnGuY0H9C.gif'];

    random_result = Math.floor(Math.random() * 102 ) + 19;

    $("#result").html('Random Result: ' + random_result);
        
    for(var i = 0; i < 4; i++){

        
        var random = Math.floor(Math.random() * 11) + 1;

    
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });
            crystal.css({
                "background-image": "url('" + images[i] + "')",
                "background-size":"cover"
            });

            crystal.html(random);
        
            $(".crystals").append(crystal); 
            

    }
    $("#previous").html("Current Total: " + previous);
}

resetAndStart();

//document listens to the dom instead of button then button is declared in argument
$(document).on('click', ".crystal", function() {
    
    //turns the var number into a number value from a string
    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Current Total: " + previous);

    console.log(previous);

    if(previous > random_result){
       
        lost++;
       
       $("#lost").html("You lost: " + lost);

       previous = 0;

       resetAndStart();
       
    }
    else if(previous === random_result){
        
        win++;

        $("#win").html("You won: " + win);

        previous= 0;

        resetAndStart();
    }
   

});

});

