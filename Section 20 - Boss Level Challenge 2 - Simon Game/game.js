let buttonColors = ["red", "blue", "gree", "yellow"];
let gamePattern = [];

function nextSequence() {
    let randomNumber = Math.round(Math.random() * 3);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    return `randomNumber ${randomNumber}, randomChosenColor ${randomChosenColor}, gamePattern ${gamePattern}`;
}

// document.querySelectorAll(".btn").forEach((button, i) =>
//     button.addEventListener("click", function () {
//         console.log(`${this.innerText} (array# ${i}) got clicked`);
//         // triggerSound(button.innerText);
//         // buttonAnimation(button.innerText);
//     }));


$('.btn').forEach((button, i) => 
button.on("click", function () {
    console.log(this.attr("id"));
    return alert("complete");
}));