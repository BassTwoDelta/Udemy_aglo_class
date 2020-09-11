function addUpTo(n){
    let total = 0; 
    for (let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}

//Big O Notation: 
// one assignment (total = 0)
// one assignment (i = 1)
// n comparrisons (i <= n)
// n additions (i++) 
// n additions (total +)
// n assignments (= sign)

