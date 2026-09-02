function processString() {
    para = document.getElementById('para').value;
    email = document.getElementById('email').value;

    let words = para.split(/\s+/);

    let vowels = para.match(/[aeiouAEIOU]/gi);

    let v_count = vowels ? vowels.length : 0;

    let searchWord = document.getElementById('find').value;

    let replaceWord = document.getElementById('replace').value;

    let position = para.indexOf(searchWord);
    
    let replacedPara = "";

    if(replaceWord) {
        const s_regex = new RegExp(searchWord, "g");
        replacedPara = para.replace(s_regex, replaceWord);
    } else {
        replacedPara = "None";
    }

    let emailRegex = /^[a-zA-Z\d._+%-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    let emailResult;

    if(emailRegex.test(email)) {
        emailResult = "Valid Email Address";
    }
    else {
        emailResult = "Invalid Email Address";
    }

    //let emailText = 'For queries contact student@example.com or educator@example.edu';

    let extractedEmails = para.match(/[a-zA-Z\d._+%-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}/g);

    let reversedPara = para.split("").reverse().join("");

    document.getElementById('output').innerHTML = 
    `
        <h3>1. Original Paragraph</h3>
        <p>${para}</p>

        <h3>2. split() - Words</h3>
        <p>${words.join(", ")}</p>

        <h3>3. match() - Vowels</h3>
        <p>${vowels ? vowels.join(", ") : "No vowels found"}</p>

        <h3>4. Vowel Count</h3>
        <p>Total number of vowels: <b>${v_count}</b></p>

        <h3>5. indexOf() - Search Word</h3>
        <p>
            Position of "<b>${searchWord}</b>":
            <b>${position}</b>
        </p>

        <h3>6. replace() - Replaced Text</h3>
        <p>${replacedPara}</p>

        <h3>7. Email Validation using Regex</h3>
        <p>
            Email: <b>${email}</b><br>
            Result: <b>${emailResult}</b>
        </p>

        <h3>8. Extracted Emails by Regex</h3>
        <p>
            ${extractedEmails ? extractedEmails.join("<br>") : "No email addresses found"}
        </p>

        <h3>9. Reversed Paragraph</h3>
        <p>${reversedPara}</p>
    `
}