// find two values average that match the target num 
// raise the first pointer if the target is higher than the average 
function avgPair(arr, target){
    let s = 0;
    let e = arr.length -1;
    if(target*2<arr[0]*2){
        return false
    }
    if(target*2>arr[e]*2){
        return false
    }
    while(s < e){
        let avg = (arr[s]+arr[e]) / 2; 
        if(avg == target){
            return true
        }
        else if(avg < target){
            s++;
        }
        else if(avg > target){
            e--;
        }
    }
    return false;
}
console.log(avgPair([1,2,3,4,5,6,7,8,9,10], 4));