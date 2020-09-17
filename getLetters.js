function getLetter(s) {
    let letter;
    const first = s.charAt(0);
    const set1 = ['a', 'e', 'i', 'o', 'u'];
    const set2 = ['b', 'c', 'd', 'f', 'g'];
    const set3 = ['h', 'j', 'k', 'l', 'm'];
    const set4 = ['n','p','q','r','s','t','v','w','x','y','z'];
    if(set1.includes(first)){
        letter = "A";
    }
    else if(set2.includes(first)){
        letter = "B";
    }
    else if(set3.includes(first)){
        letter = "C";
    }
    else if(set4.includes(first)){
        letter = "D";
    }
    return letter;
}

console.log(getLetter("bbcde"));