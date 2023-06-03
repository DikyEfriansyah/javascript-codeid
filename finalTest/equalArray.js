const array1 = ["Mangga","Apel","Melon","Pisang","Sirsak","Tomat","Nanas","Nangka","Timun","Mangga"];
const array2 = ["Bayam","Wortel","Kangkung","Mangga","Tomat","Kembang Kol","Nangka","Timun"];

function equalArray(array1, array2){
    let same = array1.filter(x => array2.includes(x));
    let sameUniq = [...new Set(same)];
    let difference = array1.filter(x => !array2.includes(x)).concat(array2.filter(x => !array1.includes(x)));

    console.log('same : ' + sameUniq)
    console.log('difference : ' + difference)

}

equalArray(array1,array2)