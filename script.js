function initializePage() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('coolland-events').style.display = 'none';
}

function showHome() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('coolland-events').style.display = 'none';
}

function showEvents() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('coolland-events').style.display = 'block';
}

function toggleSettings() {
    var settingsPopup = document.getElementById('settings-popup');
    settingsPopup.style.display = (settingsPopup.style.display === 'block') ? 'none' : 'block';
}

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function (event) {
    touchStartX = event.touches[0].clientX;
}, false);

document.addEventListener('touchmove', function (event) {
    touchEndX = event.touches[0].clientX;
}, false);

document.addEventListener('touchend', function () {
    const content = document.getElementById('content');

    if (touchStartX - touchEndX > 50) {
        // Swipe left, hide menu
        hideMenu(content);
    } else if (touchEndX - touchStartX > 50) {
        // Swipe right, show menu
        showMenu(content);
    }
});

function hideMenu(content) {
    document.getElementById('menu').classList.add('transformed');
    content.classList.add('content-transformed');
}

function showMenu(content) {
    document.getElementById('menu').classList.remove('transformed');
    content.classList.remove('content-transformed');
}




function changeTheme() {
    var theme = document.getElementById('theme').value;
    document.body.style.backgroundColor = (theme === 'dark') ? 'black' : 'white';
    document.body.style.color = (theme === 'dark') ? 'white' : 'black';
    
    // Save the theme preference to localStorage
    localStorage.setItem('theme', theme);
    
}

// Check if a theme preference is saved in localStorage
var savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    // Apply the saved theme
    document.getElementById('theme').value = savedTheme;
    changeTheme();
}

// Switch to light theme when the page is about to be unloaded
window.addEventListener('beforeunload', function () {
    if (document.getElementById('theme').value !== 'dark') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
});

//phone
document.getElementById('button-home').addEventListener('click', showHome);
document.getElementById('button-events').addEventListener('click', showEvents);
document.getElementById('button-home').addEventListener('touchend', showHome);
document.getElementById('button-events').addEventListener('touchend', showEvents);

window.onload = initializePage;
