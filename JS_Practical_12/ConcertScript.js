document.getElementById('name').addEventListener('input', function () {
    let name = this.value;

    if(/^[A-Za-z ]+$/.test(name)) {
        document.getElementById('nameError').innerHTML = "";
    } else {
        document.getElementById('nameError').innerHTML = "Only letters allowed.";
    }
});

document.getElementById('age').addEventListener('blur', function () {
    let age = this.value;
    if(age >= 18 && age <= 120) {
        document.getElementById('ageError').innerHTML = "";
     } else {
        document.getElementById('ageError').innerHTML = "Age must be between 18 and 120";
    }
});

document.getElementById('c_code').addEventListener('input', function () {
    let c_code = this.value;
    let codes = ['+91', '+62', '+63', '+66', '+84', '+880', '+60', '+94', '+977', '+65'];

    if(codes.includes(c_code) && c_code[0] === '+') {
        document.getElementById('mobileError').innerHTML = "";
    } else {
        document.getElementById('mobileError').innerHTML = "Invalid country code.";
    }
});

document.getElementById('mobile').addEventListener('input', function () {
    let mobile = this.value;

    if(/^\d{10}$/.test(mobile)) {
        document.getElementById('mobileError').innerHTML = "";
    } else {
        document.getElementById('mobileError').innerHTML = "Enter 10-digit mobile number.";
    }
});

document.getElementById('email').addEventListener('input', function () {
    let email = this.value;
    let pattern = /[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(pattern.test(email)) {
        document.getElementById('emailError').innerHTML = "";
    } else {
        document.getElementById('emailError').innerHTML="Invalid email.";
    }
});

document.getElementById('fee').addEventListener('input', function () {
    let tickets = parseInt(document.getElementById('tickets').value);

    if(tickets > 0) {
        document.getElementById('total').innerHTML = 
        `Total – ₹${tickets*1000.00}`;
        document.getElementById('feeError').innerHTML = '';
    } else {
        document.getElementById('feeError').innerHTML = "Please enter the number of tickets.";
    }
});

document.getElementById('submit').addEventListener('click', async function (e) {
    e.preventDefault();

    const data = {
        name: document.getElementById('name').value.trim(),
        age: document.getElementById('age').value,
        gender: document.querySelector('input[name="gender"]:checked')?.value,
        mobile: document.getElementById('mobile').value.trim(),
        email: document.getElementById('email').value.trim(),
        fee: document.getElementById('fee').checked,
        tickets: document.getElementById('tickets').value
    };

    const noErrors = ['nameError', 'ageError', 'emailError', 'mobileError']
        .every(id => document.getElementById(id).innerHTML === '');

    const allFilled = data.name && data.age && data.email && data.mobile
        && data.gender && data.tickets && data.fee;

    if (!(noErrors && allFilled)) {
        document.getElementById('result').innerHTML = "Please fill the required fields.";
        return;
    }
    document.getElementById('result').innerHTML = "Submitting...";

    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const text = await response.text();
        let result;
        try { 
            result = JSON.parse(text);
            
            document.getElementById('result').innerHTML = 'Success!'
        } catch { 
            throw new Error(`Server returned non-JSON (status ${response.status}): ${text.slice(0, 80)}`); 
        }
    } catch (err) {
        document.getElementById('result').innerHTML = 'Network error: ' + err.message;
    }
});
