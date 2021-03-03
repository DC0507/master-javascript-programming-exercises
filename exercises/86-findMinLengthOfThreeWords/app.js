// Write your function here

function findMinLengthOfThreeWords(wrd1, wrd2, wrd3){
    return Math.min(wrd1.length, wrd2.length, wrd3.length);
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1