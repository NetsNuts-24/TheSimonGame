
var userClickedPattern = [];
var buttonColors = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var level  = 0;
var started = 0;
// nextSequense();
document.addEventListener("keypress", function() {
    if(started === 0 ){
        nextSequense();
        started = 1;
    }
    
});




function nextSequense(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChoosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChoosenColor);
    $("#" + randomChoosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    // var audio1 = new Audio("./sounds/" + randomChoosenColor + ".mp3");
    // audio1.play();
    playSound(randomChoosenColor);
    level = level + 1;
    $("h1").text("Level " + level);
}


function playSound(name) {
    var audio2 = new Audio("./sounds/" + name + ".mp3");
    audio2.play();
}


function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);


}


function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function() {
                nextSequense();
                userClickedPattern = [];
            }, 1000);
            
        }
    }
    else {
        var errorhehe = new Audio("./sounds/wrong.mp3");
        errorhehe.play();
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over")

        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();


    }




}

function startOver() {
    level = 0;
    started = 0;
    gamePattern = [];
    userClickedPattern = [];

}

 



// $("#" + randomChoosenColor).on("click", 
// function () {
//   var audio = new Audio("./sounds/" + randomChoosenColor + ".mp3");
//   audio.play();

// });

$(".btn").on("click", function(event) {
    
    var userChoosenColor = event.target.id;
    animatePress(userChoosenColor);
    userClickedPattern.push(userChoosenColor);
    playSound(userChoosenColor);
    checkAnswer(userClickedPattern.length - 1);

});