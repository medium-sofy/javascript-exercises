const palindromes = function (str) {
  // convert to lower case to work with upper-case letters
  // remove spaces to make a single string
  // use a method to remove puctuation
  // use a stack to flip the string and compare
  // with the cleaned version

 return str.replace(/[^\w\s]/g, '')
   .toLowerCase()
   .split('')
   .filter((ch)=> ch!==' ')
   .reverse()
   .join('') === str.replace(/[^\w\s]/g, '')
                .toLowerCase()
                .split('')
                .filter((item)=> item!==' ')
                .join('')
};

// Do not edit below this line
module.exports = palindromes;
