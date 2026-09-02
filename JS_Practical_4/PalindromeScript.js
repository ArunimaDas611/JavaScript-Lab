function reverseString(str) {
    return str.split("").reverse().join("");
}

function message() {
    var msg = 'Palindrome Checker';

    function display() {
        return msg;
    }

    return display;
}
function checkPalindrome() {
    try {
        var word = document.getElementById('word').value;

        if(word == '') {
            throw 'Please enter a word.';
        }

        if(!/^[A-za-z\d]+$/.test(word)) {
            throw 'Only alphanumerical characters are allowed.'
        }

        if(word.length < 3) {
            throw 'Please enter at least 3 characters.';
        }

        if(word.length > 20) {
            throw 'Maximum 20 characters are allowed.';
        }

        let input = word.toLowerCase();

        var reverse = reverseString(input);

        if(input == reverse) {
            document.getElementById('output').innerHTML = 
            `
                <b>Word :</b> ${word} <br><br>
                <b>Result : </b> Palindrome</br>
            `
        }
        else {
            document.getElementById('output').innerHTML = 
            `
                <b>Word :</b> ${word} <br><br>
                <b>Result : </b> Not Palindrome</br>
            `
        }

    } catch(error) {
        alert(error);
    }
}