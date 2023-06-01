/** buat segitiga  */ 
// let one = '';
for (let i = 4; i >= 1; i--) {
    for(let j = 1;j <= i;j++){
        one += j;
    }
    one += '\n';
} 
console.log(one)
// output 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 
let two = '';
for(let i = 1; i <= 5;i++){
    for(let j = 5 - i + 1; j >= 1;j--){
      two += j;
    }
    two += '\n';
  }
console.log(two)
// output
// 5 4 3 2 1  
// 4 3 2 1  
// 3 2 1
// 2 1  
// 1  
