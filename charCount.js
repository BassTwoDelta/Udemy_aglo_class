function charCount(str){
    var result = {};
    for(let i = 0; i < str.length; i++){
        var char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)){
            if(result[char] > 0){
                result[char] ++; 
            }
            else {
                result[char] = 1;
            }
        }
    }
    return result;
}

console.log(charCount2("Hello my name is Garrett!"));

function charCount2(str){
    var obj = {}
    for(var char of str){
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)){
            obj[char] = ++obj[char] || 1; 
        }
    }
    return obj;
}