function showPrimeNumber(n){
    let arr = [];
    for(j = 2;j < n;j++){
        if(isPrime(j)){
            arr.push(j);
        }
    }
    return arr;
}

function isPrime(n){
    let stats = true;
    for(i = 2; i < n;i++){
        if(n%i == 0){
            stats = false;
            break;
        }
    }
    return stats;
}

console.log(showPrimeNumber(100));
/**


2	3	5	7	11
13	17	19	23	29
31	37	41	43	47
53	59	61	67	71
73	79	83	89	97

 */