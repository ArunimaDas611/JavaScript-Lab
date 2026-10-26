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
        let food = document.getElementById('food').value;
        let qty = document.getElementById('qty').value;
        let amt = document.getElementById('amt').value;
        let status = document.getElementById('status').value;


        const order = {
            "order_id":id,
            "c_name":name,
            "food_item":food,
            "quantity":qty,
            "total_amt":amt,
            "status":status
        };

        const handle = await getFileHandle();
        const text = await (await handle.getFile()).text();
        const jsonData = text.trim() ? JSON.parse(text) : [];

        jsonData.push(order);

        const writable = await handle.createWritable();
        await writable.write(JSON.stringify(jsonData, null, 2));
        await writable.close();
    } catch (err) {
        console.error(err);
        alert('Error: ' + err.name + ' - ' + err.message);
        fileHandle = null;
    }
}

$("#loadBtn").click(function() {
    $.getJSON("orders.json", function(data) {
        $('#tableBody').empty();
        $.each(data, function(index, order) {
            $('#tableBody').append(
                `
                <tr>
                    <td>${order.order_id}</td>
                    <td>${order.c_name}</td>
                    <td>${order.food_item}</td>
                    <td>${order.quantity}</td>
                    <td>${order.total_amt}</td>
                    <td>${order.status}</td>
                </tr>
                `
            );
        });
    }).fail(function() {
        alert('Error in loading JSON data.');
    });
});

/*function loadOrders() {
    fetch("orders.json").then(response => response.json()).then(data => {
        let tableBody = document.querySelector('#orderTable tbody');
        
        tableBody.innerHTML = "";

        data.forEach(order => {
            let row = 
            `
                <tr>
                    <td>${order.order_id}</td>
                    <td>${order.c_name}</td>
                    <td>${order.food_item}</td>
                    <td>${order.quantity}</td>
                    <td>${order.total_amt}</td>
                    <td>${order.status}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    }).catch(error => {
        console.log("Error: ", error);
    });
}*/