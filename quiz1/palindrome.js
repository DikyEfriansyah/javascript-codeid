/** input 4 digit, cek apakah angka palindrome */

function isPalindrome(angka){
    var len = Math.floor(angka.length / 2);
    for (var i = 0; i < len; i++)
      if (angka[i] !== angka[angka.length - i - 1])
        return console.log(angka + ' is not palindrome');
    return console.log(angka + ' is palindrome');
}


isPalindrome("abcd");//abcd is not an number
isPalindrome("123a");//123a is not an number
isPalindrome("1234");//1234 is not palindrome
isPalindrome(1221);//1221 is palindrome
isPalindrome("8888");//8888 is palindrome