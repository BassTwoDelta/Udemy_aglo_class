//create objects 
// iterate through num1 and num 2
function sameFrequency(num1, num2){
    const n1 = num1.toString();
    const n2 = num2.toString(); 
    if(num1.toString().length != num2.toString().length){
        return false;
    }
    let f1 = {}; 
    for(let num of n1){
        if(f1[num]>0){
            f1[num] ++;
        }
        else{
            f1[num] = 1;
        }
    }
    for(let num of n2){
        if(f1[num]>0){
            f1[num]--;
        }
        else{
            return false;
        }
    }
    return true;
}

console.log(sameFrequency(12789,12898));