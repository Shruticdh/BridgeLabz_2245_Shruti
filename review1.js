
const students = [
    { id : 1 , name: "Alice", grade: 85 }, { id : 2 ,name: "Bob", grade: 42 }, { id : 3 ,name: "Charlie", grade: 73 },
    { id : 4 ,name: "Diana", grade: 59 },{ id : 5 ,name: "Eve", grade: 91 },{ id : 6 ,name: "Frank", grade: 35 }, 
    { id : 7 ,name: "Grace", grade: 88 },{ id : 8 ,name: "Hank", grade: 65 }, { id : 9 ,name: "Ivy", grade: 78 },
    { id : 10 ,name: "Jack", grade: 95 },{ id : 11 ,name: "Karen", grade: 49 },{ id : 12 ,name: "Leo", grade: 53 },
    { id : 14 ,name: "Mia", grade: 87 },{ id : 15 ,name: "Nina", grade: 74 },{ id : 16 ,name: "Oscar", grade: 60 },
];

let Passing_Grade = 50; 

console.log("======Student and their marks======");
function displaystudentgrades(){
    students.forEach(student => 
        console.log(` ${student.id} ${student.name} - Grade : ${student.grade}`))
}
displaystudentgrades();

console.log();
console.log("======Student passed and failed======");
function checkpassorfail(){
    students.forEach(student => {
    if(student.grade >= Passing_Grade){
        console.log(`${student.id} ${student.name} is Passed`);
    }
    else{
        console.log(`${student.id} ${student.name} is Failed`);
    }
});
}
checkpassorfail();

console.log();
console.log("======passing students======");
function countpassingstudents(){
    let passingcount = students.filter(student => student.grade >= Passing_Grade);
    passingcount.forEach(student => 
        console.log(`${student.id} ${student.name} - Grade ${student.grade}`)
    )
}
countpassingstudents();

console.log();
console.log("======failing students======");
function countfailingtudents(){
    let failingcount = students.filter(student => student.grade < Passing_Grade);
    failingcount.forEach(student => 
        console.log(`${student.id} ${student.name} - Grade ${student.grade}`)
    )
}
countfailingtudents();

console.log();
console.log("======top performer======");
function topPerformer(){
    let topgrade = Math.max(...students.map(student => student.grade));
    let topStudent = students.filter( student => student.grade === topgrade);
    topStudent.forEach(student => console.log(`${student.id}. ${student.name} - Grade ${student.grade}`))
}
topPerformer();

console.log();
console.log("======Grade Distribution======");
function gradeDistribution(){
    const gradeRanges = {
        "A (100-90)" : students.filter(student => student.grade >= 90).length,
        "B (89-81)" : students.filter(student => student.grade <= 89 && student.grade > 81).length,
        "C (80-71)" : students.filter(student => student.grade <= 80 && student.grade > 71).length,
        "D (70-61)" : students.filter(student => student.grade <= 70 && student.grade > 61).length,
        "E (60-51)" : students.filter(student => student.grade <= 60 && student.grade > 51).length,
        "F (below 50)" : students.filter(student => student.grade <= 50).length,
    };

    for(const [range , count] of Object.entries(gradeRanges)){
        console.log(`${range} ${count} students`)
    }
}
gradeDistribution();

console.log();
console.log("======Class Average======");
function calculateClassAverage() {
    let totalGrades = students.reduce((sum, student) => sum + student.grade, 0);
    let average = totalGrades / students.length;

    console.log(`Class Average: ${average.toFixed(2)}`);
    if (average >= Passing_Grade) {
        console.log("The class is performing well.");
    } else {
        console.log("The class needs improvement.");
    }
}
calculateClassAverage();

console.log();
console.log("======Provide specialization======");
function providespecialfunction(){
    const givenSubjects = {
        "Non-Medical(s) :- " : students.filter(student => student.grade >= 90).length,
        "Medical(s) :- " : students.filter(student => student.grade <= 89 && student.grade > 81).length,
        "Commerce(s) :- " : students.filter(student => student.grade <= 80 && student.grade > 71).length,
        "Arts(s):-" : students.filter(student => student.grade <= 70 && student.grade > 61).length,
        "Physiology(s):- " : students.filter(student => student.grade <= 60 && student.grade > 51).length,
        "No-Specialization(s):- " : students.filter(student => student.grade <= 50).length,
    };

    for(const [ range, count] of Object.entries(givenSubjects)){
        console.log(`${range} ${count} students`)
    }
}
providespecialfunction();