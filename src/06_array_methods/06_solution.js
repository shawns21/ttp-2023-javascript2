// Code your solution here

function useMapToUpperCase(word){
    wordList = word.split(' ');
    const map = wordList.map(x => x.toUpperCase());
    return map;
}

function useFilter(word){
    const result = word.filter(x => x.includes('@'));
    return result;
}

function sumWithReduce(array1, start = 0){
    const sum = array1.reduce((adder, curr) => adder + curr, start);
    return sum;
}

function filterEvensDoubleAndSum(arr){
    let filteredArray = arr.filter(x => x % 2 == 0)
    let mappedArray = filteredArray.map(x => x * 2)
    let reducedArray = mappedArray.reduce((adder, curr) => adder + curr, 0)

    return reducedArray;
}

console.log(useFilter(["test@", "herl", "wewe@"]))

console.log(useMapToUpperCase("hello"));

console.log(filterEvensDoubleAndSum([3, 4, 5, 6, 7, 8]))