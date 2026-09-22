const fnameInput = document.getElementById('Firstname');
const lnameInput = document.getElementById('Lastname');
const dayInput = document.getElementById('Birth Day');
const monthInput = document.getElementById('Birth Month');
const yearInput = document.getElementById('Birth Year');
const unameInput = document.getElementById('Username');
const emailInput = document.getElementById('E-mail');
const webInput = document.getElementById('Website');
const passInput = document.getElementById('Password');
const passReInput = document.getElementById('pass-re');
const tacInput = document.getElementById('tac');
const signUp = document.getElementById('signup');

const message = document.createElement('p');
message.className = 'message';

let nameRegex = /[A-Z][a-z]{1,100}/
let userRegex = /[A-Za-z\d_]{1,100}/
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
let webRegex = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/
let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\/\-\+])[A-Za-z\d@$!%*?&\/\-\+]{7,}$/

signUp.addEventListener('click', function () {
    if(fnameInput.value === null || unameInput.value === null || passInput.value === null || passReInput.value === null || tacInput.checked === false)
    {
        alert('You haven\'t filled out the mandatory fields yet!');
        return;
    }

    if(!nameRegex.test(fnameInput.value) || (!nameRegex.test(lnameInput.value) && lnameInput !== null) || (!userRegex.test(unameInput.value) && unameInput !== null)) {
        alert('Invalid name! Names should be between 1-100 characters.');
        return;
    }
    
    if(parseInt(monthInput.value) === 2 && parseInt(dayInput.value) > 28) {
        if(parseInt(dayInput.value) === 29 && parseInt(yearInput.value) % 4 !== 0) {
            alert('Invalid date! February only has 28 days, except in leap years.');
            return;
        }

        if(parseInt(dayInput.value) > 29) {
            alert('Invalid date! February can only have 28 or 29 days.');
            return;
        }
    }

    if(!emailRegex.test(emailInput.value)) {
        alert('Invalid email!');
        return;
    }

    if(!webRegex.test(webInput.value)) {
        alert('Invalid website!');
        return;
    }

    if(!passRegex.test(passInput.value)) {
        alert('Password must be atleast 7 characters long, including atleast one uppercase letter, one lowercase letter, one number, and one special character.');
        return;
    }

    if(passReInput.value !== passInput.value) {
        alert('Re-typed password is not the same one!');
        return;
    }

    alert('Sign-up is successful!');

    const buttons = document.createElement('div');
    buttons.className = 'buttons';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit';
    editBtn.textContent = 'Edit';

    const clrBtn = document.createElement('button');
    clrBtn.className = 'clear';
    clrBtn.textContent = 'Clear Form';

    buttons.appendChild(editBtn);
    buttons.appendChild(clrBtn);
    
    document.body.appendChild(buttons);

    editBtn.addEventListener('click', function () {
        const line = document.createElement('p');
        line.textContent = 'Select a field to edit';

        document.body.appendChild(line);

        const fieldSel = document.createElement('select');
        fieldSel.innerHTML = 
        `
        <option selected>Firstname</option>
        <option>Lastname</option>
        <option>Birth Day</option>
        <option>Birth Month</option>
        <option>Birth Year</option>
        <option>Username</option>
        <option>E-mail</option>
        <option>Website</option>
        <option>Password</option>
        `;

        fieldSel.addEventListener('change', function () {
            selectedVal = this.value;
            let field = document.getElementById(`${selectedVal}`).value;

            if(selectedVal === 'Password') {
                let newPass = prompt('Edit Password', field);

                let confirmPass = prompt('Re-type Password', field);

                if(newPass !== confirmPass) {
                    alert('Re-typed password is not the same one!');
                    return;
                }

                if(newPass !== null && confirmPass !== null) {
                    document.getElementById(`Password`).value = newPass;
                    document.getElementById('pass-re').value = confirmPass;
                }

                message.innerHTML = `Password edited!`;

                document.body.appendChild(message);
            }
            else {

                let newField = prompt(`Edit Form`, field);

                if(newField !== null) {
                    document.getElementById(`${selectedVal}`).value = newField;
                }

                message.innerHTML = `${selectedVal} edited! New value: ${newField}`;

                document.body.appendChild(message);
            }
            
        });

        document.body.appendChild(fieldSel);
    });

    clrBtn.addEventListener('click', function () {
        document.getElementById('Firstname').value = null;
        document.getElementById('Lastname').value = null;
        document.getElementById('Birth Day').value = null;
        document.getElementById('Birth Month').value = null;
        document.getElementById('Birth Year').value = null;
        document.getElementById('Username').value = null;
        document.getElementById('E-mail').value = null;
        document.getElementById('Website').value = null;
        document.getElementById('Password').value = null;
        document.getElementById('pass-re').value = null;
        document.getElementById('tac').value = null;

        message.innerHTML = `Form cleared successfully!`;

        document.body.appendChild(message);
    });

});