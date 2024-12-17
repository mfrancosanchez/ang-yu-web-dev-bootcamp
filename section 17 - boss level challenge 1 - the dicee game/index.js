 let randomNumber1= Math.floor(Math.random() * 6) + 1,
     randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "🏆🥇🙌 Player 1 Wins!!!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 Wins!!! 🏆🥇🙌";
}else{
    document.querySelector("h1").innerText = "It's a Draw! Throw again!";
}

// let [randomNumber1, randomNumber2] = [1, 2].map(() => Math.floor(Math.random() * 6) + 1);
//
// ["img1", "img2"].forEach((img, i) =>
 // document.querySelector(`.${img}`).src = `images/dice${i === 0 ? randomNumber1 : randomNumber2}.png`);
//
// let result = randomNumber1 === randomNumber2 ? "It's a Draw! Throw again!" :
 // randomNumber1 > randomNumber2 ? "🏆🥇🙌 Player 1 Wins!!!" : "Player 2 Wins!!! 🏆🥇🙌";
// document.querySelector("h1").innerText = result;
