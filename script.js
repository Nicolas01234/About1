// Function to handle hamburger menu click
function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.onclick = function() {
            const navBar = document.querySelector('.nav-bar');
            navBar.classList.toggle('active');
        };
    }
}

// Header and footer loading
function loadComponent(url, elementId, callback) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            if (callback) callback();
        })
        .catch(error => console.error('Error loading component:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    loadComponent('./assets/header.html', 'header-placeholder', setupHamburgerMenu);
    loadComponent('./assets/footer.html', 'footer-placeholder');
});
