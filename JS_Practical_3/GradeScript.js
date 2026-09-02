function gradeSystem() {
    let name = document.getElementById("name").value;
    var marks = Number(document.getElementById("marks").value);
    
    if (name === "") {
        alert('Name is not given!');
        return;
    }

    if (marks < 0 || marks > 100) {
        alert('Marks are not in the correct range!');
        return;
    }

    var grade;
    var result;

    if(marks >= 95) {
        grade = 'O';
        result = 'Outstanding';
    }

    else if(marks >= 90 && marks < 95) {
        grade = 'A+';
        result = 'Excellent';
    }

    else if(marks >= 80 && marks < 90) {
        grade = 'A';
        result = 'Very Good';
    }

    else if (marks >= 70 && marks < 80) {
        grade = 'B+';
        result ='Good';
    }

    else if (marks >= 70 && marks < 80) {
        grade = 'B';
        result ='Above Average';
    }

    else if (marks >= 70 && marks < 80) {
        grade = 'C';
        result ='Average';
    }

    else if (marks >= 70 && marks < 80) {
        grade = 'P';
        result ='Pass';
    }

    else {
        grade = 'F';
        result = 'Fail';
    }

    document.getElementById('output').innerHTML = 
    `
        <h2>Student Grade Report</h2>
        <br>
        <b>Student Name: ${name}</b>
        <br><br>
        <b>Marks: ${marks}</b>
        <br><br>
        <b>Grade: ${grade}</b>
        <br><br>
        <b>Result: ${result}</b>
    `
}