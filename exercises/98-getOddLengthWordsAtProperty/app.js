// Write your function here
function getOddLengthWordsAtProperty(obj, key){
    newArr = [];
    newArr = obj[key].filter(wrd => wrd.length % 2 != 0)
    return newArr;
}

var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']