let bottles = 99;

function ninety9Bottles() {
    while (bottles > 1 && bottles <= 100) {
        console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer.`);
        bottles--;
        if (bottles > 1) {
            console.log(`Take one down and pass it around, ${bottles} bottles of beer on the wall.`);
            console.log("");
        } else {
            console.log(`Take one down and pass it around, ${bottles} bottle of beer on the wall.`);
            console.log("");
        }
    }
    console.log(`${bottles} bottle of beer on the wall, ${bottles} bottle of beer.`);
    console.log("Take one down and pass it around, no more bottles of beer on the wall.");
    console.log("");
    console.log("No more bottles of beer on the wall, no more bottles of beer.");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
}


ninety9Bottles();