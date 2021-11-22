// Step 2: Write Code
// Work through the following problems in Javascript (you have seen these problems before). Create a new file for your code. When you have finished with each function, leave a code comment with what you believe the runtime of your code to be.

// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

// For example:

// addToZero([]);
// // -> False

// addToZero([1]);
// // -> False

// addToZero([1, 2, 3]);
// // -> False

// addToZero([1, 2, 3, -2]);
// // -> True
let arr1 = [0, 1, 2, 3, 4, 5]
let arr2 = [1, 2, 3, 4, 5,-5]

function totalSumEqualZero (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return true
            } else {
           
            }
        }
    } return false
}
console.log(totalSumEqualZero(arr1));
console.log(totalSumEqualZero(arr2));





// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

// For example:

// hasUniqueChars("Monday");
// // -> True

// hasUniqueChars("Moonday");
// // -> False
const string1 = "monday"
const string2 = "moonday"

const uniqueString = (string) => {
    
    for (let i = 0; i < string.length; i++){
        for (let j = 1; j < string.length; j++){
            if (i !== j && string[i] === string[j]){
                return false
            }
        }
    } return true
}

console.log(uniqueString(string1))
console.log(uniqueString(string2))






// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

// For example:

// isPangram("The quick brown fox jumps over the lazy dog!");
// // -> True

// isPangram("I like cats, but not mice");
// // -> False

function isPangramSentence (str)  {

    let toLowerStr = str.toLowerCase()
    let excludes = [".", ",", "!", " "]
    let letters = []

    for (let i = 0; i < toLowerStr.length; i++) {
       if (letters.includes(toLowerStr[i]) === false && excludes.includes(toLowerStr[i]) === false){
           letters.push(toLowerStr[i])
       }
    }
    return (letters.length === 26)
};

console.log(isPangramSentence("The quick brown fox jumps over the lazy dog!"));
console.log(isPangramSentence("I like cats, but not mice"));












// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// For example:

// findLongestWord(["hi", "hello"]);
// // -> 5
// Be sure to add this file to your Github repo for this project.
function find_longest_word (word) {
    let word_lengths = []
    
    for (let i = 0; i < word.length; i++){
        word_lengths.push(word[i].length)
    }
    return(Math.max(... word_lengths))
};

console.log(find_longest_word(["hi", "hello","helllooo"]))//-->8