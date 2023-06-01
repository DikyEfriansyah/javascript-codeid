const checkPermute = function(stringOne, stringTwo) {
    // if different lengths, return false

    let hasil = stringOne.localeCompare(stringTwo, undefined, { sensitivity : 'base' })

    if(hasil == 0){
        console.log('True');
    }else{
        console.log('False');
    }

    return hasil;
    // else sort and compare 
    // (doesnt matter how it's sorted, as long as it's sorted the same way)

  };
  

  checkPermute('aba', 'aba')//true;
  checkPermute('aba', 'aaba')//false;
  checkPermute('aba', 'aa')//false;