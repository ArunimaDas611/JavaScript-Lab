let data = [];

function addEmp() {
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let dept = document.getElementById('dept').value;
    let sal = document.getElementById('sal').value;

    console.log(id);
    console.log(name);
    console.log(dept);
    console.log(sal);

    const record = {
        id: id,
        name: name,
        department: dept,
        salary: sal
    };

    const record_json = JSON.stringify(record);

    console.log(record_json);

    data.push(record_json);

    localStorage.setItem('emp_data', data);

    displayInfo(data);
}

function displayInfo(data) {
    let tableBody = document.getElementById('empTable');

    console.log(data);

    tableBody.innerHTML = 
    `
    <tr>
        <th>Employee ID</th>
        <th>Employee Name</th>
        <th>Department</th>
        <th>Salary</th>
    <tr>
    `;

    data.forEach(emp => {
        let {id, name, department, salary} = JSON.parse(emp);

        let row = 
        `
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${department}</td>
                <td>${salary}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}