/** ubah value string ke date 
 *  gunakan split
 *  inputan s = bulan/hari/tahun
*/


function strToDate(s){
    const arrayDay = s.split(/[/]/);

    if(isNaN(arrayDay[0]) || isNaN(arrayDay[1]) || isNaN(arrayDay[2])){
        return (s + ' bad format date') 
    }else{
        let day = new Date(arrayDay);
        return day.toString();
    }
}

console.log(strToDate('12/30/2021'));//Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate('12/aa/bb')); //12/aa/bb bad format date
