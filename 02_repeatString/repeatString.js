const repeatString = function (string, n) {
  let repeatedString = ''
  if(n < 0) return 'ERROR'
  for (let i = 0; i < n; i++) 
  {
    repeatedString += string
  }
  return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
