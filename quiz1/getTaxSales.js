/**
 * Hitung pajak dari total penjualan
 * function getSalesTax(price, tax)
 */

function getSalesTax(price, tax) {
    let taxDue = price*(tax/100);
    let total = price*(1+(tax/100));
    if(isNaN(price) && isNaN(tax)){
        console.log('price & pajak harus dalam angka')
    }else if(isNaN(price)){
        console.log('price harus dalam angka')
    }else if(isNaN(tax)){
        console.log('pajak harus dalam angka')
    }else{
        console.log('Harga : '+ price)
        console.log('Pajak : '+ taxDue)
        console.log('Totalharga+pajak : '+ total)

    }
}

getSalesTax("a", 1);//Price harus dalam angka
getSalesTax(500, "pajak");//Price & Pajak harus dalam angka
getSalesTax("harga", "pajak");//Pajak harus dalam angka
getSalesTax(4500, 5);
/**
 Total Sales : Rp.4500
 Pajak : 0.5
 TotalHarga+Pajak : Rp.4505
 
*/