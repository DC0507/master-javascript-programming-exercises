// Write your function here
function areValidCredentials(name, pws){
    if (name.length > 3 && pws > 7){
        return true;
    } else{
        return false;
    }

}

var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true