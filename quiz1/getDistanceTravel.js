/** hitung jarak antar kota
 *  dimana rumus jarak S = 1/2*a*t^2
 *  function calculateDistance(a,t), 
 *  where a = accelaration in number
 *  t : time
 */

function calculateDistance(a, t){
    if(typeof a == 'number' || typeof t == 'number'){
        if(a <= 0 || t <= 0){
            console.log('Accelaration or time must be >= 0')
        }else{
            console.log(1/2*a*t**2);
        }
    }else{
        console.log('input must an number')
    }
}

calculateDistance("a","t");//input must an number
calculateDistance(-1,9); //Accelaration or time must be >= 0
calculateDistance(50,60); //Jarak yang ditempuh adalah 90000 meter/s