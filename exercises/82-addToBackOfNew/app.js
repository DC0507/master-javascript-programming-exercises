// Write your function here
function addToBackOfNew(arr, element){
    newArr = arr.slice();
    newArr.push(element);
    return newArr;
}