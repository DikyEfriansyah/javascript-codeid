/** berapa banyak tahun kabisat antara tahun1 ke tahun2 */

function howManyKabisat(year1,year2){
    let yearKabisat = [];
    for(i = year1; i <= year2;i++){
        if(isKabisat(i)){
            yearKabisat.push(i);
        }
    }
    return yearKabisat;
}

function isKabisat(year){
    let kab = false;
    if(year%400 == 0 && year%100 != 0 || year%4 == 0){
        return true;
    }

    return kab;
}

console.log(howManyKabisat(1997,2021));
console.log(isKabisat(1998));
