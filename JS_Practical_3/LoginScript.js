function verifyLogin() {
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;

    if(!(email.includes('@') && email.includes('.'))) {
        alert('Please enter a valid email address.');
        return;
    }

    if(pass.length < 7 || !/[A-Z]/.test(pass) || !/[a-z]/.test(pass) || !/[\d]/.test(pass) || !/[!@#$%^&*(){}:"<>?/,.;'[]/) {
        alert('Password must be atleast 7 characters long, including atleast one uppercase letter, one lowercase letter, one number, and one special character.');
        return;
    }

    alert('You have succesfully logged in!');
}