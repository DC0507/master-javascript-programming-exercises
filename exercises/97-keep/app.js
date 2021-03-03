// Write your function here
function keep(arr, keeper){
    let newArr = [];
    newArr = arr.filter(item => item === keeper);
    return newArr;
}

var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); //--> [2, 2]