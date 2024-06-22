let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

function nextSequence() {
    let randomNumber = Math.round(Math.random() * 3);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    playSoundAnimation(randomChosenColor);
    
    // return `randomNumber ${randomNumber}, 
    // randomChosenColor ${randomChosenColor}, 
    // gamePattern ${gamePattern}, 
    // colorId ${colorId}`;
}

$('.btn').each(function (i, button) {
    $(button).on("click", function () {
        let userChosenColor = $(this).attr("id");
        playSoundAnimation(userChosenColor);
        userClickedPattern.push(userChosenColor);

        // console.log(`${userChosenColor} (array# ${i}) got clicked`);
        // console.log(`${userClickedPattern}`);
    });
});

function playSoundAnimation(id){
    let sound = new Audio(`sounds/${id}.mp3`);
    let wrongSound = new Audio(`sounds/wrong.mp3`);
    $(`#${id}`).fadeOut(100).fadeIn(100);
    return id ? sound.play() : wrongSound.play();
}
