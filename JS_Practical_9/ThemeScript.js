window.onload = function () {
    let savedTheme = localStorage.getItem('theme');
    if(savedTheme) {
        setTheme(savedTheme);
    }
};

function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);

    sessionStorage.setItem('currentTheme', theme);

    document.getElementById('message').innerText = 
    'Theme saved: ' + theme;
}

function clearTheme() {
    localStorage.removeItem('theme');
    sessionStorage.removeItem('currentTheme');

    document.body.classList.remove('dark');

    document.getElementById('message').innerText = 
    'Theme preference cleared.';
}