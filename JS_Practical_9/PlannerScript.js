window.onload = function () {
    let savedSchedule = localStorage.getItem('schedule');
    if(savedSchedule) {
        displaySchedule(JSON.parse(savedSchedule));
    }
};

function addSession() {
    let day = document.getElementById('day').value;
    let begin = document.getElementById('begin').value;
    let end = document.getElementById('end').value;
    let topic = document.getElementById('topic').value;
    let details = document.getElementById('details').value;

    schedule = JSON.parse(localStorage.getItem('schedule')) || [];
    session = {
        day,
        begin,
        end
    };

    schedule.push(session)

    localStorage.setItem('schedule', JSON.stringify(schedule));
    sessionStorage.setItem('currentTopic', topic);
    sessionStorage.setItem('eventDetails', details);

    displaySchedule(schedule);
}

function displaySchedule(schedule) {
    let planner = document.getElementById('planner');
 
    let tableHTML = `
        <tr>
            <th>Day</th>
            <th>Begin Time</th>
            <th>End Time</th>
            <th>Topic</th>
        </tr>
    `;
 
    schedule.forEach( (s, index) => {
        let {day, begin, end} = s;
        let topic = sessionStorage.getItem('currentTopic');
        let details = sessionStorage.getItem('eventDetails');
 
        tableHTML += `
            <tr>
                <td>${day}</td>
                <td>${begin}</td>
                <td>${end}</td>
                <td onclick="showEventDetails('${day}', '${begin}', '${end}', '${topic}', '${details}')">${topic}</td>
            </tr>
        `;
    });
 
    planner.innerHTML = tableHTML;
}

function showEventDetails(day, begin, end, topic, details) {
    alert(`Event Details:\n\n${details}`);
}