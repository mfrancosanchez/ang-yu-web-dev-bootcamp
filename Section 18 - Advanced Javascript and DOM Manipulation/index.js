document.querySelectorAll("button.drum").forEach((button, i) =>
    button.addEventListener("click", function () {
        console.log(`${this.innerText} (array# ${i}) got clicked`);
        triggerSound(button.innerText);
        buttonAnimation(button.innerText);
    }));

document.addEventListener("keydown", function (e) {
    // console.log(e.key);
    console.log(`${e.key} got pressed`);
    triggerSound(e.key);
    buttonAnimation(e.key);


})

function triggerSound(key) {

    switch (key) {
        case 'w':
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'a':
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 's':
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'd':
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'k':
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 'l':
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    }
}

function buttonAnimation(key) {
    let clickedButton = document.querySelector(`.${key}`);
    clickedButton.classList.add("pressed");
    setTimeout(function () {
        clickedButton.classList.remove("pressed");
    }, 100);
}