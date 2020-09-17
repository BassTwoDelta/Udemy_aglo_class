function bCakeCandles(arr){
    let count = 0;
    let max = Math.max(...arr);
    for(let i=0; i < arr.length; i++){
        if(arr[i]===max){
            count ++;
        }
    }return count;
}

console.log(bCakeCandles([3,2,1,3]));
