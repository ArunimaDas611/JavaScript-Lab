function checkIfBot() {
    let str = document.getElementById('bio').value;
    let para = document.getElementById('post').value;

    let rev_str = str.split("").reverse().join("");

    let vowels = para.match(/[aeiouAEIOU]/g);
    let v_count = vowels ? vowels.length : 0;

    let para1 = para.replace(/ /g, "");
    let char_count = para1.length;
    let con_count = char_count - v_count;

    let ratio = (v_count / char_count)*100;
    let result;

    if(ratio < 40.0) {
        result = "Potential spam bot!"
    }
    else {
        result = "Likely safe"
    }

    document.getElementById('output').innerHTML = 
    `
        <h3>Reversed bio:</h3>
        <b>${rev_str}</b>
        <br><br>
        <h3>Number of vowels in the post: </h3>
        <b>${v_count}</b>
        <br><br>
        <h3>Vowel-To-Consonant Ratio: </h3>
        <b>${ratio.toFixed(2)}</b>
        <br><br>
        <h3>Result: </h3>
        <b>${result}</b>
    `

    console.log(v_count);
}