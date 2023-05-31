 /**
  * hitung sales discount plus tax rate
  * function getSalesDiscount
  */

 function getSalesDiscount(price,tax,discount){
    let diskon = price*(discount/100);
    let priceafterdiskon = price-diskon;
    let taxDue = priceafterdiskon*((tax/100));
    let total = priceafterdiskon+taxDue;
    if(isNaN(price) && isNaN(tax) && isNaN(discount)){
        console.log('price, pajak & diskon harus dalam angka')
    }else if(isNaN(price)){
        console.log('price harus dalam angka')
    }else if(isNaN(tax)){
        console.log('pajak harus dalam angka')
    }else if(isNaN(discount)){
        console.log('diskon harus dalam angka')
    }else{
        console.log('Harga : '+ price)
        console.log('Diskon '+ discount +'% : '+diskon )
        console.log('Priceafterdiskon : '+ priceafterdiskon)
        console.log('Pajak '+tax+'% : '+ taxDue)
        console.log('---------------------------------------')
        console.log('TotalPayment : '+total)

    }
 }

getSalesDiscount("a", 1,5);//Price harus dalam angka
getSalesDiscount(500, "pajak",5);//Pajak harus dalam angka
getSalesDiscount("harga", "pajak","discount");//Price, Tax & Discount harus dalam angkaa
getSalesDiscount(4500, 10,5);
/**
    Total Sales 	: Rp.4500 
    Discount (5%) 	: Rp.225
    PriceAfterDiscount 	: Rp.4275
    Pajak (10%) 	: Rp.427.5
    ----------------------------------
    TotalPayment 	: Rp.4702.5
 */