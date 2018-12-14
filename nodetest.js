// ALGORITHM 1

function largestPdrone(){

    let arr = [];    
    for(let i =999; i>100; i--){
        for(let x = 999; x>100; x--){
            let mul = x*i;
            if(isPalin(mul)){
                arr.push(x * i);
            }
        }
    }

    return Math.max.apply(Math, arr);
}

function isPalin(i){
    return i.toString() == i.toString().split("").reverse().join("");
}

console.log(largestPdrone());

// ALGORITHM 2

let numRows = 10;
let numCols = 10;
let matrix = [];
for (let row = 0; row < numRows; row++){
  matrix.push([]);
  for(let cell = 0; cell < numCols; cell++){
    if (row === 0 || cell === 0){
      matrix[row][cell] = 1;
    } else {
      matrix[row][cell] = matrix[row-1][cell] + matrix[row][cell-1];
    }
  }
}
matrix.forEach(row => console.log(row));
console.log(`The number of paths is ${matrix[numRows-1][numCols-1]}`);

// ALGORITHM 3

// function findRoutes(gridSize){
//     let routeMatrix = [];
//     for(let i = 1; i <= gridSize; i++){
//         routeMatrix.push(1);
//     }
//     for(let x = 1; x <= gridSize; x++){
//         routeMatrix[x] = routeMatrix[x] + routeMatrix[x-1];
//     }
//     routeMatrix[i] = 2 * routeMatrix[i-1];
//     console.log(routeMatrix)
//     return routeMatrix[gridSize]
// }
// gridSize = 4;
// x = findRoutes(gridSize)
// console.time('grid')
// console.log(n)
// console.timeEnd()