let fileHandle = null;
async function getFileHandle() {
     if (!fileHandle) {
        [fileHandle] = await window.showOpenFilePicker({
            types: [{ description: 'JSON', accept: { 'application/json': ['.json'] } }]
        });
    }

    const perm = await fileHandle.requestPermission({ mode: 'readwrite' });
    if (perm !== 'granted') throw new Error('Write permission was not granted');
    return fileHandle;
}

async function addToJSON() {
    try {
        let id = document.getElementById('id').value;
        let name = document.getElementById('name').value;
        let dept = document.getElementById('dept').value;
        let marks = document.getElementById('marks').value;


        const student = {
            "id":id,
            "name":name,
            "department":dept,
            "marks":marks
        };

        const handle = await getFileHandle();
        const text = await (await handle.getFile()).text();
        const jsonData = text.trim() ? JSON.parse(text) : [];

        jsonData.push(student);

        const writable = await handle.createWritable();
        await writable.write(JSON.stringify(jsonData, null, 2));
        await writable.close();
    } catch (err) {
        console.error(err);
        alert('Error: ' + err.name + ' - ' + err.message);
        fileHandle = null;
    }
}

function loadStudents() {
    fetch("students.json").then(response => response.json()).then(data => {
        let tableBody = document.querySelector('#studentTable tbody');
        
        tableBody.innerHTML = "";

        data.forEach(student => {
            let row = 
            `
                <tr>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.department}</td>
                    <td>${student.marks}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    }).catch(error => {
        console.log("Error: ", error);
    });
}