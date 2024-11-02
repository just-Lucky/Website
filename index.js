document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
        event.preventDefault();
    }
});
document.addEventListener('contextmenu', event => event.preventDefault());

const toggleSwitch = document.getElementById('dark-mode-toggle');
const footer = document.querySelector('footer');
const currentTheme = localStorage.getItem('theme');

function updateTheme(theme) {
    document.body.classList.toggle('dark-mode', theme === 'dark-mode');
    footer.classList.toggle('dark-mode-footer', theme === 'dark-mode');
    localStorage.setItem('theme', theme);
}

if (currentTheme) {
    updateTheme(currentTheme);
    if (currentTheme === 'dark-mode') {
        toggleSwitch.checked = true;
    }
}


toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        updateTheme('dark-mode');
    } else {
        updateTheme('light-mode');
    }
});
