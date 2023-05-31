/**
 * input 4 digit integer lalu hitung jumlahnya
 */

function sumDigit(n){
   if(n > 10000){
        console.log(n + ' harus lebih kecil dari 10000')
   }else if(isNaN(n)){
        console.log(n + ' is not number, try again')
   }else{
    let initialNumber = n;
    let sum = 0;
  
    while (initialNumber) {
      sum += initialNumber % 10;
      initialNumber = Math.floor(initialNumber / 10);
    }
  
    return sum;
   }
}

console.log(sumDigit(1234)); //10
console.log(sumDigit("1234"));//10
console.log(sumDigit(12345));//12345 harus lebih kecil dari 10000
console.log(sumDigit("a123"));//a123 is not number, try again...