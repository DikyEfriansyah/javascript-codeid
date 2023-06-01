function isCharsUnique(string){
    let value = true;
    for(let i = 0; i < string.length; i++)
        for(let j = i + 1; j < string.length; j++)
            if (string[i] == string[j])
                value = false;
    return value;
}

console.log(isCharsUnique('abcdefg'));//true
console.log(isCharsUnique('abcdefga'));//false