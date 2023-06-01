function isPalindrome(word){
    var removeChar = word.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    var checkPalindrome = removeChar.split('').reverse().join('');

    if(removeChar == checkPalindrome){
        return true
    }
    return false
}

console.log(isPalindrome('kasur ini rUsak'));//true