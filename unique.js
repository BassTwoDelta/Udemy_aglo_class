function countUniqueValues(arr){
    if (arr.length<1){
        return 0
    }
    let i=0
    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i+1
}

console.log(countUniqueValues([1,2,3,4,5]))