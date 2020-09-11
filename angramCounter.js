function validAnagram(str1, str2){
    if(str1.length != str2.length){
        return false;
    }
    
    let f1 = {};
    let f2 = {};
    
    for(let char of str1){
        if(f1[char]>0){
            f1[char] ++; 
        }
        else{
            f1[char] = 1; 
        }
    }
    for(let char of str2){
        if(f2[char]>0){
            f2[char] ++; 
        }
        else{
            f2[char] = 1; 
        }
    }
    for(let key in f1){
        if(!(key in f2)){
            return false;
        }
        if(f1[key] !== f2[key]){
            return false;
        }
    }
    return true; 
}

console.log(validAnagram('anagram', 'nagaram'))
