let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let hasGameStarted = false;

// trigger next sequence
function nextSequence() {
    let randomNumber = Math.round(Math.random() * 3);
    const randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    playSound(randomChosenColor);
    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);

    // h1 lavel change
    level++;
    $(`#level-title`).text(`Level ${level}`);

    // console.log(`user ${userClickedPattern}`);
    console.log(`game ${gamePattern}`);
}

// make the buttons clickable | user selection
$(".btn").each(function (i, button) {
    $(button).on("click", () => {
        const userChosenColor = $(this).attr("id");
        userClickedPattern.push(userChosenColor);
        checkAnswer(userClickedPattern.length - 1);
        playSound(userChosenColor);
        animatePress(userChosenColor);
    });
});

// start the game on key press
$(document).on("keyup", () => {
    if (!hasGameStarted) {
        nextSequence();
        hasGameStarted = true;
    }
})

// play sound method
function playSound(name) {
    const sound = new Audio(`sounds/${name}.mp3`);
    const wrongSound = new Audio(`sounds/wrong.mp3`);
    return name ? sound.play() : wrongSound.play();
}

// button press animation
function animatePress(currentColor) {
    $(`#${currentColor}`).addClass("pressed");
    setTimeout(() => {
        $(`#${currentColor}`).removeClass("pressed");
    }, 100);
}

// checking answers function
function checkAnswer(currentLevel) {
    // console.log(`user ${userClickedPattern}`);
    // console.log(`game ${gamePattern}`);

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log('success');
        if (userClickedPattern.length - 1 == gamePattern.length - 1) {
            setTimeout(() => {
                nextSequence();
                userClickedPattern = [];
            }, 1000);
        }
    } else {
        console.log('wrong');
        // console.log(`user ${userClickedPattern} || game ${gamePattern}`);
    }
}

// return `randomNumber ${randomNumber},
// randomChosenColor ${randomChosenColor},
// gamePattern ${gamePattern},
// colorId ${colorId}`;

// console.log(`${userChosenColor} (array# ${i}) got clicked`);
// console.log(`${userClickedPattern}`);