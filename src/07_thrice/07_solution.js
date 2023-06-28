// Code your solution here


function thrice(func){

    let count = 0;

    return function() {
        if (count < 3) {
            count++;
            return func();
            } 
        else {
            return undefined;
        }
    }; 
}

const helloWorld = thrice(function () {
  return 'Hello World';
});
// helloWorld is the function returned from `thrice`
const firstCall = helloWorld();
console.log(firstCall);
// firstCall === "Hello World";

const secondCall = helloWorld();
// secondCall === "Hello World";
console.log(secondCall);

const thirdCall = helloWorld();
// thirdCall === "Hello World";
console.log(thirdCall);

const fourthCall = helloWorld();
// fourthCall === undefined;
console.log(fourthCall);
const fifthCall = helloWorld();
// fifthCall = undefined;
console.log(fifthCall);