// Write your function here
function removeElement(arr, discarder){
    let newArr = [];
    newArr = arr.filter(item => item != discarder);
    return newArr;
}