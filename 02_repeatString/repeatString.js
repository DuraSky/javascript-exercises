const repeatString = function(string, repeatString) {
    let i = 0;
    let finalString = "";

    if (Math.sign(repeatString) === -1) {
        return "ERROR";
    } else {
    

    for (i; i < repeatString; i++) {
        finalString += string;
        
    }
    return finalString;
}
};

// Do not edit below this line
module.exports = repeatString;


//define values in fucntion
// take count in the function and repeat string as many times
// take the output and join in a single string
