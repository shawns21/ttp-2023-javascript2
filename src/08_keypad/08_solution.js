// Code your solution here

function presses(string){

    let dict = { 
       1: ["A", "D", "G", "J", "M", "P", "T", "W", " ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"] ,
       2: ["B", "E", "H", "K", "N", "Q", "U", "X"] ,
       3: ["C", "F", "I", "L", "O", "R", "V", "Y"] , 
       4: ["S", "Z"] 
    };

    let count = 0;
    string = string.toUpperCase();

    for (let i = 0; i < string.length; i++) {
        for (let key in dict) {
            if (dict[key].includes(string[i])) {
                count += Number(key);
                break;
            }
        }
    }

    return count;
}

console.log(presses("I am traveling to Chicago and staying on 1st street"));