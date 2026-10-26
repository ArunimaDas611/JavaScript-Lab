$("#loadBtn").click(function() {
    $.getJSON("students.json", function(data) {
        $('#tableBody').empty();
        $.each(data, function(index, student) {
            $('#tableBody').append(
                `
                <tr>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.department}</td>
                    <td>${student.marks}</td>
                </tr>
                `
            );
        });
    }).fail(function() {
        alert('Error in loading JSON data.');
    });
});