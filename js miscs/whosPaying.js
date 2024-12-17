function whosPaying(names) {
    /******Don't change the code above*******/

    //Write your code here.
    // result = Math.floor(Math.random() * (names.length + 1));
    return (
        names[Math.floor(Math.random() * names.length)] + " is going to buy lunch today!"
    );

    /******Don't change the code below*******/
}

var nameList = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
whosPaying(nameList);
