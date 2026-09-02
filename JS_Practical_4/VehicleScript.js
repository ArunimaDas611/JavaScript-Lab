function checkRegId() {
    regid = document.getElementById('regid').value;

    regex = /^[A-Z]{2}[\d]{2}[A-Z]{2}[\d]{4}$/

    try {
        if(regid == "") {
            throw "Registration number field is empty!"
        }
        
        if(regid.length > 10) {
            throw "Registration number is too long!"
        }

        if(regid.length < 10) {
            throw "Registration number is too short!"
        }

        if(!regex.test(regid)) {
            throw "Invalid registration number! Try again."
        }

        else {
            document.getElementById('output').innerHTML = 
            `
                <h2>Successfully Registered!</h2>
            `
        }
    } catch(error) {
        alert(error);
    }
}