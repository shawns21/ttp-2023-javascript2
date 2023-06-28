// Code your solution here

function reject(arr, func) {
    fails = []
    for (let word of arr){
        if (func(word) == false){
           fails.push(word); 
        }
    }

    return fails;
}

const testWord = word => { return word.length > 3; }
const listOfWords = reject(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'], testWord);
// listOfWords = ['one', 'two', 'six'];

console.log(listOfWords);