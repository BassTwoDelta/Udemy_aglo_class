function reverse(str){
    if(str.length === 1){
        return str;
    }
    let newstr = str[str.length-1]
    return newstr + reverse(str.slice(0,str.length-1));
}