function plusMinus(arr) {
    const n = arr.length;
    let pos = 0;
    let neg = 0; 
    let zero = 0; 
    for(let i = 0; i < n; i++){
        if(arr[i] > 0){
            pos ++;
        }
        else if(arr[i] < 0){
            neg ++; 
        }
        else if (arr[i] === 0){
            zero ++; 
        }
    }
    console.log((pos/n).toFixed(6));
    console.log((neg/n).toFixed(6));
    console.log((zero/n).toFixed(6));
}

console.log(plusMinus([1,0,1,-2,-4,5]));