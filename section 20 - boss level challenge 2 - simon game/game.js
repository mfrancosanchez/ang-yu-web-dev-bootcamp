let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let hasGameStarted = false;

// trigger next sequence
function nextSequence() {
    userClickedPattern = [];
    let randomNumber = Math.round(Math.random() * 3);
    const randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    playSound(randomChosenColor);
    $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);

    // h1 lavel change
    level++;
    $("#level-title").text(`Level ${level}`);
}

// start the game on key press
$(document).on("keyup", () => {
    if (!hasGameStarted) {
        nextSequence();
        hasGameStarted = true;
    }
});

// make the buttons clickable | user selection
    $(".btn").on("click", function() {
        if (!hasGameStarted) {
            return;
        }
        const userChosenColor = $(this).attr("id");
        userClickedPattern.push(userChosenColor);
        checkAnswer(userClickedPattern.length - 1);
        playSound(userChosenColor);
        animatePress(userChosenColor);
    });

// play sound method
function playSound(name) {
    const sound = new Audio(`sounds/${name}.mp3`);
    return sound.play();
}

// button press animation
function animatePress(currentColor) {
    $(`#${currentColor}`).addClass("pressed");
    setTimeout(() => {
        $(`#${currentColor}`).removeClass("pressed");
    }, 100);
}

// game over
function startOver() {
    playSound('wrong');
    $("h1").html(`Game Over <hr> Press Any Key to Restart`);
    hasGameStarted = false;
    level = 0;
    userClickedPattern = [];
    gamePattern = [];
    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 200);
}

// checking answers function
function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length - 1 == gamePattern.length - 1) {
            setTimeout(() => {
                nextSequence();
                userClickedPattern = [];
            }, 1000);
        }
    } else {
        startOver();
    }
}