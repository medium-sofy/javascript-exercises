const removeFromArray = function(array) {

    for(let i = 0; i < array.length ;i++){
       for(let j = 1; j < arguments.length; j++){

        if(array[i] === arguments[j]){
            array.splice(i,1)
        }
    ``}
`` }
    return array
};
array = removeFromArray([1, 2, 3, 4], 3,2)
console.log("Array after execution; ")
for(let i =0;i< array.length;i++)
console.log(array[i])
// Do not edit below this line
module.exports = removeFromArray;
