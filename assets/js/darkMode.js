document.addEventListener('DOMContentLoaded', () => {
    const nightModeToggle = document.getElementById('nightModeToggle');
    
    // Check if dark mode is enabled
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('night-mode');
        nightModeToggle.textContent = 'Light Mode';
    }

    // Toggle dark mode
    nightModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('night-mode');
        
        // Save user preference
        if (document.body.classList.contains('night-mode')) {
            localStorage.setItem('darkMode', 'true');
            nightModeToggle.textContent = 'Light Mode';
        } else {
            localStorage.setItem('darkMode', 'false'); 
            nightModeToggle.textContent = 'Night Mode';
        }
    });
});