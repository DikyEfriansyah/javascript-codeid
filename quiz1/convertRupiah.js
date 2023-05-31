/**
 * Convert rupiah to other currency
 */

function convertToRupiah(money,type){
    let typeYen = money*107;
    let typeUsd = money*15000;
    let typeEuro = money*16000;
    if(type == 'yen'){
        console.log(money + type + ' = Rp.'+ typeYen )
    }else if(type == 'usd'){
        console.log(money + type + ' = Rp.'+ typeUsd )
    }else if(type == 'euro'){
        console.log(money + type + ' = Rp.'+ typeEuro )
    }else{
        console.log('no match type currency')
    }
}

convertToRupiah(1000,'yen');//1000 yen  = Rp.130.120
convertToRupiah(100,'usd');//100 dollar  = Rp.1.438.250
convertToRupiah(100,'euro');//100 dollar  = Rp.1.600.000
convertToRupiah(100,'');//no match type currency