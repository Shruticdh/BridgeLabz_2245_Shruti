'use strict';

let students = [
    { name: "jia", grade: "86" },
    { name: "jayant", grade: "57" },
    { name: "ritu", grade: "32" },
    { name: "lucky", grade: "65" },
];

function count() {
    let passedstudents = 0;

    // Loop through the students array
    for (let i = 0; i < students.length; i++) {
        // Convert grade to number for comparison
        let grade = parseInt(students[i].grade);

        if (grade >= 50) {
            console.log(`${students[i].name} has passed`);
            passedstudents++;
        } else {
            console.log(`${students[i].name} has failed`);
        }
    }

    // Print the total number of passing students
    console.log(`Total number of students passing: ${passedstudents}`);
}

// Call the function to classify students and print the result
count();
