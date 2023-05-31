/**
 * konversi fareinheit to kelvin
 * rumus Kelvin = (Fareinheit + 459.67)/1.8
 * 
 */

function fareinheitToKelvin(fareinheit){
   if(isNaN(fareinheit)){
        console.log('Fareinheit must an number')
   }else{
        console.log((fareinheit + 459.67)/1.8)
   }
}

fareinheitToKelvin(45); //Convert Fareinheit (45) to Kelvin = 280
fareinheitToKelvin("1"); //Convert Fareinheit (1) to Kelvin = 811
fareinheitToKelvin("F"); //Fareinheit must an number