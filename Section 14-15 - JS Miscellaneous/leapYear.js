function isLeap(year) {
    /**************Don't change the code above****************/

    //Write your code here.
    var result = "";
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                result = "Leap year";
            } else {
                result = "Not leap year";
            }
        } else {
            result = "Leap year";
        }
    } else {
        result = "Not leap year";
    }

    return result;
    /**************Don't change the code below****************/
}

console.log(2100 + " is " + isLeap(2100)); //is not
console.log(1989 + " is " + isLeap(1989)); //is not
console.log(2400 + " is " + isLeap(2400)); //is
console.log(1804 + " is " + isLeap(1804));
console.log(1808 + " is " + isLeap(1808));
console.log(1812 + " is " + isLeap(1812));
console.log(1816 + " is " + isLeap(1816));
console.log(1820 + " is " + isLeap(1820));
console.log(1824 + " is " + isLeap(1824));
console.log(1828 + " is " + isLeap(1828));
console.log(1832 + " is " + isLeap(1832));
console.log(1836 + " is " + isLeap(1836));
console.log(1840 + " is " + isLeap(1840));
console.log(1844 + " is " + isLeap(1844));
console.log(1848 + " is " + isLeap(1848));

// result = "Leap year";
// if (year % 4 === 0 && year % 100 !== 0) {
// result = "Not Leap year";
// if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0){
// result = "Leap year";}
// }
