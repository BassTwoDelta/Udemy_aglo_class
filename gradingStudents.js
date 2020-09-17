function gradingStudents(grades){
    let roundedGrades= [];
    for (let i = 0; i < grades.length; i++){
        let dif = multipleOfFive(grades[i]);
        let final = dif + grades[i];

        if((dif < 3) && (finalGrade >= 40)){
            roundedGrades.push(final);
        }
        else{
            roundedGrades.push(grades[i]);
        }
    }
    return roundedGrades;
}

function multipleOfFive(x) {
    let counter = 0;
    while (x % 5 != 0) {
        x++;
        counter++;
    }
    return counter;
}