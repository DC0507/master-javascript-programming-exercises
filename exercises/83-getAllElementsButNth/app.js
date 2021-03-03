// Write your function here
function getAllElementsButNth(arr, index){
    newArr = arr.splice(index, 1);
    return newArr;
}