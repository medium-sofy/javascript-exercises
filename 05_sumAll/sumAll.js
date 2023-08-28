// Formula : S = n(a+i)/2  n = number of integers between a and i , a is the first element, and i is the last element
const sumAll = function(start,end) {
    if(typeof start !== 'number' || typeof end !== 'number'){
        return 'ERROR'
    }
    
    if(start < 0 || end < 0) return 'ERROR'
    let length = Math.abs(end - start) + 1// use math.abs for the case that start is larger than end.
    let sum = length*(start + end)/2
    return sum
};
//console.log(typeof "90")
// Do not edit below this line
module.exports = sumAll;
