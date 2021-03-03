// Write your function here
function getElementsThatEqual10AtProperty(obj, key){
    let newArr = []
    Object.keys(obj).forEach(
        k => {
            if (obj[key] === 10){
                newArr.push(10);
            }
        }
        )
return newArr;
}