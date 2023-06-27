// Code your solution here
function multiplicationTable(row, column) {
  
    let matrix = []

    for (let i = 0; i < row; i++){
        
        matrix.push([]);

        for (let x = 0; x < column; x++){
     
            matrix[i].push((x+1) * (i + 1)); 
        }
    }

    return (matrix);
}