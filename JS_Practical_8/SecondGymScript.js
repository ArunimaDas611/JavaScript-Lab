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

document.getElementById('bday').addEventListener('input', function () {
    let bday = this.value;

    if(bday === "") {
        document.getElementById('dateError').innerHTML = "Please select a date";
    } else {
        document.getElementById('dateError').innerHTML = "";
    }
});

document.getElementById('weight').addEventListener('blur', function () {
    let weight = this.value;
    if(weight > 10.0  && weight <= 120.0) {
        document.getElementById('weightError').innerHTML = "";
     } else {
        document.getElementById('weightError').innerHTML = "Weight must be between 10 and 120 kgs";
    }
});

document.getElementById('height').addEventListener('blur', function () {
    let height = this.value;
    if(height >= 80.0  && height <= 250.0) {
        document.getElementById('heightError').innerHTML = "";
     } else {
        document.getElementById('heightError').innerHTML = "Height must be between 80 and 250 cms";
    }
});

document.getElementById('bmi').addEventListener('blur', function () {
    let bmi = this.value;
    if(bmi >= 12  && bmi <= 70.0) {
        document.getElementById('bmiError').innerHTML = "";
     } else {
        document.getElementById('bmiError').innerHTML = "BMI must be between 12 and 70";
    }
});

document.getElementById('details').addEventListener('input', function () {
    let details = this.value;

    let ailment;

    let ops = document.getElementsByName('cond');

    for(var i = 0; i < ops.length; i++) {
        if(ops[i].checked === true) {
            ailment = ops[i].value;
            break;
        }
  }

    if(details !== '' && ailment !== 'yes') {
        document.getElementById('detailsError').innerHTML = "Details are only needed for people with ailments.";
     } else if (ailment === 'yes' && details === '') {
        document.getElementById('detailsError').innerHTML = "Details are necessary";
    } else {
        document.getElementById('detailsError').innerHTML = "";
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

document.getElementById('sday').addEventListener('input', function () {
    let sday = this.value;

    if(sday === "") {
        document.getElementById('date2Error').innerHTML = "Please select a date";
    } else {
        document.getElementById('date2Error').innerHTML = "";
    }
});


document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mobile').value;
    let bday = document.getElementById('bday').value;
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let bmi = document.getElementById('bmi').value;
    let plan = document.getElementById('plan').value;
    let sday = document.getElementById('sday').value;

    let gender, ailment;

    let genders = document.getElementsByName('gender');
    let ops = document.getElementsByName('cond');

    for(var i = 0; i < genders.length; i++) {
        if(genders[i].checked === true) {
            gender = genders[i].value;
            break;
        }
    }

    for(var i = 0; i < ops.length; i++) {
        if(ops[i].checked === true) {
            ailment = ops[i].value;
            break;
        }
    }

    if((
        document.getElementById('nameError').innerHTML === "" &&
        document.getElementById('ageError').innerHTML === "" &&
        document.getElementById('emailError').innerHTML === "" && 
        document.getElementById('mobileError').innerHTML === "" &&
        document.getElementById('dateError').innerHTML === "" &&
        document.getElementById('weightError').innerHTML === "" &&
        document.getElementById('heightError').innerHTML === "" &&
        document.getElementById('bmiError').innerHTML === "" &&
        document.getElementById('detailsError').innerHTML === "" &&
        document.getElementById('planError') !== "" &&
        document.getElementById('date2Error').innerHTML === ""
    ) && (name !== '' && age !== '' && email !== '' & mobile !== '' && bday !== '' && gender !== '' && weight !== '' && height !== '' && bmi != '' && ailment !== '' && plan !== '' && sday !== '')) {
        document.getElementById('result').innerHTML = "Success!";
    }
    else {
        document.getElementById('result').innerHTML = "Please fill the required fields";
    }
    
});