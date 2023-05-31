/** Buat program untuk menampilkan prosentasi dari income*/

function getProsentase(start,end){
    let angka = end-start;
    let persen = (angka/start)*100;
    if(typeof start == 'number' || typeof end == 'number'){
        if(start < end){
            console.log('Total kenaikan income '+ persen.toFixed(0) + '%')
        }else{
            console.log('Total penurunan income '+ persen.toFixed(0) + '%')
        }
    }else{
        console.log(start + ' or '+ end + ' harus dalam angka')
    }
}

getProsentase("abc","bca");//abc or bca harus dalam angka
getProsentase(600000.00,750000.00);//Total kenaikan income 25%
getProsentase(750000.00,650000.00);//Total penurunan income -14%