// Write your function here
function getElementsLessThan100AtProperty(obj, key){
    let newArr = []
    Object.keys(obj).forEach(
        k => {
            if (obj[key] < 100){
                newArr.push(10);
            }
        }
        )
return newArr;
}