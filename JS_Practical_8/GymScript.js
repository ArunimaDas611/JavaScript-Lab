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
    if(age >= 16 && age <= 60) {
        document.getElementById('ageError').innerHTML = "";
     } else {
        document.getElementById('ageError').innerHTML = "Age must be between 16 and 60";
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

document.getElementById('mobile').addEventListener('input', function () {
    let mobile = this.value;

    if(/^\d{10}$/.test(mobile)) {
        document.getElementById('mobileError').innerHTML = "";
    } else {
        document.getElementById('mobileError').innerHTML = "Enter 10-digit mobile number.";
    }
});

document.getElementById('plan').addEventListener('change', function () {
    let plan = this.value;

    if(plan === "") {
        document.getElementById('planError').innerHTML = "Please select a plan";
    } else {
        document.getElementById('planError').innerHTML = "";
    }
});

document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mobile').value;
    let plan = document.getElementById('plan').value;

    if((
        document.getElementById('nameError').innerHTML === "" &&
        document.getElementById('ageError').innerHTML === "" &&
        document.getElementById('emailError').innerHTML === "" && 
        document.getElementById('mobileError').innerHTML === "" &&
        document.getElementById('plan') !== ""
    ) && (name !== '' && age !== '' && email !== '' & mobile !== '' && plan !== '')) {
        document.getElementById('result').innerHTML = "Success!";
    }
    else {
        document.getElementById('result').innerHTML = "Please fill the required fields";
    }
    
});
