const numbers = [44,131,335,223,21,66,87];
// This syntax is not allowed. The result is NaN.

function maxNumber(arrays){
    let number = arrays[0];
    for(i = 0; i < arrays.length; i++){
        if(arrays[i] > number){
            number = arrays[i];
        }
    }
    return number;
}

console.log(maxNumber(numbers));