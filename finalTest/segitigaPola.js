function segitiga1(panjang) {
    let hasil = '';
    let number = 1;
    for (let i = 1; i < panjang; i++) {
        for (let j = 1; j <= i; j++) {
            hasil += number + ' ';
            number++;
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga1(8));

function segitiga2(panjang) {
    let hasil = '';
    let number = 5;
    for (let i = 1; i < panjang; i++) {
        for (let j = 1; j <= i; j++) {
            hasil += number + ' ';
            number++;
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga2(8));