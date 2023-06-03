const arr = [3,8,9,7,6];

function rotateArray(arr, k){
    for(let i = 0;i < k;i++){
        arr.unshift(arr.pop());
    }
    return arr;
}
