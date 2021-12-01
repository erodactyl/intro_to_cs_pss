const reader = require('readline-sync');
const students = require('./students.json');

const id = reader.questionInt("Please enter student id: ");

let foundStudent;

console.log(students)

for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
        foundStudent = students[i];
        break;
    }
}

if (!foundStudent) {
    console.log(`No student was found with id ${id}! Error 404!`);
    return;
}

console.log(foundStudent);
