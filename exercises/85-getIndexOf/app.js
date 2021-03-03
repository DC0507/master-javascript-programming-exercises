// Write your function here

function getIndexOf(char, str){
    strArr = str.split('');
    for (ind in strArr){
        if (strArr === char){
            return ind;
            break;
        }
    }
}

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2