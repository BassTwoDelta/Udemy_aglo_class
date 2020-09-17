function staircase(n) {
    let filledArray = new Array(n).fill(' ');
    while (filledArray.indexOf(' ') !== -1) {
        filledArray.shift();
        filledArray.push('#');
        console.log(filledArray.join(""));
        n--;
    }
}

console.log(staircase(5))