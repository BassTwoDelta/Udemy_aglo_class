function miniMaxSum(arr){
    arr.sort();
    var minSum = sum(arr.slice(0, -1))
    var maxSum = sum(arr.slice(1))
    console.log(minSum, maxSum)
}
function sum(subArr) {
    return subArr.reduce(function(a, b) {
        return a + b;
            }, 0);
}
miniMaxSum([1,2,3,4,5]);