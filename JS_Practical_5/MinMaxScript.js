let array = [];

function addNumber() {
    let name = document.getElementById('name').value;
    let num = parseInt(document.getElementById('val').value);

    const stu = {
        name:name,
        marks:num
    };

    array.push(stu);

    displayArray();

    document.getElementById('val').value = '';
}

function displayArray() {
    let table = document.getElementById('table');

    table.innerHTML = 
    `
        <tr>
            <th>Student</th>
            <th>Marks</th>
        </tr>
    `

    array.forEach(function(stu) {
        table.innerHTML += 
        `
            <tr>
                <td>${stu.name}</td>
                <td>${stu.marks}</td>
            </tr>
        `
    });

    console.log(array[0]);

    let max = array.reduce(function(max, curr) {
        return curr.marks > max ? curr.marks : max;
    }, array[0].marks);

    let max1 = document.getElementById('max');

    max1.innerHTML = 
    `
    <h3>${max}</h3>
    `

    let min = array.reduce(function(min, curr) {
        return curr.marks < min? curr.marks : min;
    }, array[0].marks);

    let min1 = document.getElementById('min');

    min1.innerHTML = 
    `
    <h3>${min}</h3>
    `

    console.log(min);
}