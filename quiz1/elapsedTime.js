/**
 * hitung detik ke dalam day, hour, minute and seconds
 */


function getPeriodTimes(seconds) {
    if(isNaN(seconds)){
        console.log(seconds + ' is not number')
    }else{
        let d = Math.floor(seconds / (3600*24));
        let h = Math.floor(seconds % (3600*24) / 3600);
        let m = Math.floor(seconds % 3600 / 60);
        let s = Math.floor(seconds % 60);

        console.log(d + ' hari ' + h + ' jam '+ m + ' menit ' + s + ' detik ')
    }
}

getPeriodTimes("700005A");//700005A is not number
getPeriodTimes("700005");//8 hari 2 jam 26 menit 45 detik