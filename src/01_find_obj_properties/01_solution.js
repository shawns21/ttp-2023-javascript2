// Code your solution here
function findObjPropsHasOwn(obj){

    let finalString = [];

    for (let prop in obj){
        if (obj.hasOwnProperty(prop)){
            finalString.push(prop);
        }
    }  

    let fin = finalString.join(", ");

    return(fin);
}

function findObjKeys(obj){
    let fin = Object.keys(obj).join(", ");
    return(fin);
}
