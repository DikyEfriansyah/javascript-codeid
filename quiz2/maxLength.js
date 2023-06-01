function maxWordLength(params) {
    let word = params.split(" ");
    let wordLength = word[0];
    for(i = 0; i < word.length; i++){
        if(word[i].length > wordLength.length){
            wordLength = word[i];
        }
    }
    return wordLength;
}

console.log(maxWordLength("aku suka bootcamp sentul city"));//bootcamp