function isSubsequence(str1,str2){
    let i = 0;
    let j = 0; 
    while(j < str2.length){
        if(str1[i] == str2[j]){
            i++; 
        }
        if(i == str1.length){
            return true;
        }
        else{
            j++
        }
    }
    return false;
}

console.log(isSubsequence('hello', 'helo world'))
