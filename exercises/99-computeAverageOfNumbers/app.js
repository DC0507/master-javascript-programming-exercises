// Write your function here
function computeAverageOfNumbers(arr){
    let total = 0;
    if (arr.length != 0){
        arr.forEach(element => total += element);
    }
    return total/arr.length;
}

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3