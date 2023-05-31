/**
 * Menghitung jarak kordinat
 * 𝑑 = √(𝑥1 − 𝑥2)^2 + (𝑦1 −𝑦2)^2
 */

function getCordinat(x1,y1,x2,y2) {
   if(isNaN(x1) || isNaN(x2) || isNaN(y1) || isNaN(y2)){
      console.log('Input kordinat dalam angka')
   }else{
      console.log(Math.sqrt((x1-x2)**2 + (y1-y2)**2).toFixed(2))
   }
}

getCordinat(3,4,-4,-5); //9
getCordinat("1","2","-1","-2"); //1
getCordinat("x","2","-y","-2"); //input kordinat dalam angka
getCordinat(3.2,4.5,-4.4,-5); //13.695801445917125