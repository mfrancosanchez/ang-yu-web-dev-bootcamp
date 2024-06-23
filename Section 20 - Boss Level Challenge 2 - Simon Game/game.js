let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

function nextSequence() {
    let randomNumber = Math.round(Math.random() * 3);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    playSound(randomChosenColor);
    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);
    level++;
    $(`#level-title`).text(`Level ${level}`);
}

$(".btn").each(function (i, button) {
    $(button).on("click", function () {
        let userChosenColor = $(this).attr("id");
        userClickedPattern.push(userChosenColor);
        playSound(userChosenColor);
        animatePress(userChosenColor);
    });
});

function playSound(name) {
    let sound = new Audio(`sounds/${name}.mp3`);
    let wrongSound = new Audio(`sounds/wrong.mp3`);
    return name ? sound.play() : wrongSound.play();
}

function animatePress(currentColor) {
    $(`#${currentColor}`).addClass("pressed");
    setTimeout(function () {
        $(`#${currentColor}`).removeClass("pressed");
    }, 100);
}

$(document).on("keyup", function(){
    let hasGameStarted = false;
    if(!hasGameStarted){
        hasGameStarted = true;
        nextSequence();
    }
})

// return `randomNumber ${randomNumber},
// randomChosenColor ${randomChosenColor},
// gamePattern ${gamePattern},
// colorId ${colorId}`;

// console.log(`${userChosenColor} (array# ${i}) got clicked`);
// console.log(`${userClickedPattern}`);