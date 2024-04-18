function fibonacciGenerator(n) {
    //Do NOT change any of the code above 👆

    //Write your code here:

    var output = [];
    if (n === 1) {
        output = [0];
        return output;
    } else if (n === 2) {
        output = [0, 1];
        return output;
    } else {
        // var F = 0;

        // output.push(output[0]+output[1]);
        output = [0, 1];

        for (let i = 3; i <= n; i++) {//starting i at 3 because there are 2 items in the array already and the next one is being pushed next
            // F = out
            output.push((output[output.length - 2]) + (output[output.length - 1]));
        }
    }


    return output;

    //Return an array of fibonacci numbers starting from 0.

    //Do NOT change any of the code below 👇
}

