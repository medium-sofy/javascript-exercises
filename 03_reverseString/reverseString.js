const reverseString = function(string) {
let length = string.length-1
let revString=[]
for(let i = length; i >= 0; i--){
    revString.push(string[i])

}

revString = revString.join('')
return revString

};

// or : return string.split('').reverse().join('')

// Do not edit below this line
module.exports = reverseString;
