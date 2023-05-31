/** Display year is kabisat and display month */

function getDays(month,year){
    if(isNaN(month) && isNaN(year)){
        console.log('inputan bulan & tahun harus dalam integer')
    }else if(isNaN(year)){
        console.log('inputan tahun harus dalam integer')
    }else if(isNaN(month)){
        console.log('inputan bulan harus dalam integer')
    }else{
        let day = new Date(year, month, 0)
        let message = year%400 == 0 ? (console.log('This month has '+ day.getDate() + ' days, ' + year +' adalah tahun kabisat')) : (console.log('This month has '+ day.getDate() + ' days'));
        return message
    }
}

getDays("a",2021); //inputan bulan harus dalam integer
getDays("2","year"); //inputan tahun harus dalam integer
getDays("m","year");//inputan bulan & tahun harus dalam integer
getDays(2,2000); //This month has 29 days, 2000 adalah tahun kabisat
getDays(8,2021); //This month has 31 hari