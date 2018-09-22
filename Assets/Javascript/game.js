
// array to hold random value to choose for random number

var random_result;
var win = 0;
var lost = 0;
var previous = 0;
 
//prepares page to load 
$(document).ready(function() {



//function to assign images/crystals values in a new div
var resetAndStart = function function_name(){
    
    $(".crystals").empty();

    var images = [
    'https://i.pinimg.com/originals/6e/91/46/6e9146efb8487faff07a36dc41f68bfa.gif',
    'https://68.media.tumblr.com/44cb3e3115039f4167440687f92aca45/tumblr_ofgsdj5fvk1vsjcxvo1_540.gif',
    'http://gifimage.net/wp-content/uploads/2017/10/crystal-gif-7.gif',
    'https://i.giphy.com/Z06UFnGuY0H9C.gif'];

    random_result = Math.floor(Math.random() * 102 ) + 19;

    $("#result").html('Random Result: ' + random_result);
     //loops through the 4 crystals giving a value to each one   
    for(var i = 0; i < 4; i++){

        // assigns the value from 1-12
        var random = Math.floor(Math.random() * 11) + 1;

        // once the value of crystals is set the var crystal creates a div with class of 'crystal' and places the data from the var random inside 
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });
            crystal.css({
                "background-image": "url('" + images[i] + "')",
                "background-size":"cover"
            });
            //shows the value of the crystals inside the boxes(only seen when highlighted so that user doesnt have access to values)
            crystal.html(random);
        
            $(".crystals").append(crystal); 
            

    }//sets id of previous to have current value of crystals clicked (also shows that when the game starts it shows current value at 0 when game loads initially)
    $("#previous").html("Current Total: " + previous);
}
//calls function so that the forloop is ran
resetAndStart();

//document listens to the dom instead of button then button is declared in argument
//controls any clicks within window or on class crystal
$(document).on('click', ".crystal", function() {
    
    //turns the var num into a num value from a string
    var num = parseInt($(this).attr('data-random'));

    // previous is equal to the value of num converted string to value
    previous += num;

    // displays the value of previous 
    $("#previous").html("Current Total: " + previous);
    
    //allows the developer to see what values the crystals have to make sure code exectutes correctly
    console.log(previous);

    // if previous is greater then the random_result chosen by computer then add 1 to loss counter
    if(previous > random_result){
       
        lost++;
       
       $("#lost").html("You lost: " + lost);
       
       // sets current total back to 0
       previous = 0;

       //exectures the code again from the begining
       resetAndStart();
       
    }
    // if previous is equal to the random_result then add +1 to win counter
    else if(previous === random_result){
        
        // increments so the value of the wins shows after the game is complete
        win++;

        $("#win").html("You won: " + win);
        
        //reset current total value to 0 
        previous = 0;

        // restarts game from begining
        resetAndStart();
    }
   

});

});

