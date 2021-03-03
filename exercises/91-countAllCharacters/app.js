// Write your function here

function countAllCharacters(str){
    newObj = {};
    let strArr = str.split('');
    strArr.forEach(ch => {
        if (ch in newObj){
            newObj[ch] += 1;
        } else{
            newObj[ch] = 1;
        }
    }
    );
    return newObj;
}

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}