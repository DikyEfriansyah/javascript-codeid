function totalLompat(x, y ,k){
    let progress = x;
    let count = 0;
    while (progress < y) {
        progress += k;
        count++;
    }
    return count;
}

console.log(totalLompat(10,85,30))