// Code your solution here
function soup(phrase, bank){

    let dict = {};

    for (let letter of bank){
        
        if (!(letter in dict)){
           dict[letter] = 1;
        }

        else{
            dict[letter] += 1;
        }
    }

    for (let letter of phrase){
        if (letter in dict){
            if (dict[letter] <= 0){
                return false;
            }
            dict[letter] -= 1;
        }
        else{
            return false;
        }
    }
    
    return true;
}

const phrase = 'abcdefg';
const bank = 'abcd';
console.log(soup(phrase, bank));