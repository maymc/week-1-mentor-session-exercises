/** Function: firstReverse
 * The function will take the str parameter being passed in and
 * return the string in reversed order
 * @param {string} str
 * @return {string} reversed
 * ie: "cat" => "tac"
 */

function firstReverse(str){
    //Create an array to hold the reverse letters
    var reverseArray = [];

    //Check if the parameter is of datatype string, if not return null
    if(typeof str !== "string"){
        return null;
    }
    else{
        //Convert the string to an array
        var strArray = str.split("");
        //console.log(strArray);
        
        //Pop the last element in the original array of letters and push it to the new array. This will reverse the order of the elements
        for(var i=(strArray.length-1); i>=0; i--){
            var letter = strArray.pop();
            //console.log(letter);
            reverseArray.push(letter);
            //console.log(reverseArray);
        }
        //Convert the new array to a string and return the reversed string
        var reverseString = reverseArray.join("");
        //console.log(reverseString);
        return reverseString;
    }
}

 /** Function: alphaOrder
 * The function will take the str parameter being passed in and
 * return the string in alphabetical order
 * @param {string} str
 * @return {string} in alphabetical order
 * ie: "cake" => "acek"
 */

 /** Function: vowelCount
 * The function will take the num parameter being passed in and
 * return the number of vowels in the string
 * @param {string} num
 * @return {number} count of vowels
 * ie: "oreo" => 3
 */

 /** Function: timeConvert
 * The function will take the str parameter representing the amount of minutes being passed in and
 * return the number of hours and minutes. Seperate the number of hours
 * and minutes with a colon
 * @param {number} str
 * @return {string} as hours:minutes
 * ie: 68 => 1:8
 */

 /** Function: repeatString
 * The function will take in two parameters and repeat a given string (first argument)
 * num times (second argument). Return an empty string if num is a negative number
 * @param {string} str
 * @param {num} times
 * @return {string} repeated num times
 * i.e repeatString("money", 3) => "moneymoneymoney".
 */


/**
 * Below here we see a module.exports which is set to an object with a bunch of keys.
 * The module.exports syntax is a built-in javascript keyword that
 * allows functionality from this file to be used in other files.  
 * Here we are exporting an object with a bunch of keys that will reference 
 * the functions you have made. After you are done implementing a function,
 * change the 'null' to reference the corresponding function you have just created.
 * Then go into your terminal and run 'npm test' to see if the tests pass for your function.
 *
 * The reason why we export our functions out of this file is because behind the scenes,
 * the test-runner is importing this file so that it can gain access to the functions
 * and run tests on it.
 */

module.exports = {
    firstReverse: firstReverse,
    alphaOrder: null,
    vowelCount: null,
    timeConvert: null,
    repeatString: null
}
