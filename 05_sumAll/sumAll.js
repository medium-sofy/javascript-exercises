const sumAll = function(start, end) {
  if(start < 0 || end < 0) return 'ERROR'
  if(typeof start != 'number' || typeof end != 'number') return 'ERROR'
  if(start > end) {
    let temp = start
    start = end
    end = temp
  }

  return end * (end + 1) / 2

};

// Do not edit below this line
module.exports = sumAll;
