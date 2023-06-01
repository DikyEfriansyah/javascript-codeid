function isArraysEqual(arrayA, arrayB) {
    let equal = false;
    for(i = 0; i < arrayA.length;i++){
        for(j = 0; j < arrayB.length;j++){
            if(arrayA[i] == arrayB[j]){
                equal = true;
            }
        }
    }

    return equal;
}

const fruitNamesA = ['rambutan', 'durian', 'jeruk', 'nangka'];
const fruitNamesB = ['rambutan', 'durian', 'jeruk', 'nangka'];
const fruitNamesC = ['anggur', 'apel', 'mangga', 'alpukat'];
console.log(isArraysEqual(fruitNamesA, fruitNamesB)); // true
console.log(isArraysEqual(fruitNamesA, fruitNamesC)); // false