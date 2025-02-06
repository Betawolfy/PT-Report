const reportTemplate = `
Dear PonyTown staff,

I'm contacting you to report a user who is violating the rules of Pony Town.
(Tell us about your report here, Please provide as much proof and information of their violation as possible)

My account ID: 

Name of the hidden user:

A message that they sent: “ ”

Related chatlog/character images:
`;

// Template builder

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reportForm');
    const nightModeToggle = document.getElementById('nightModeToggle');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const reportDesc = document.getElementById('reportDesc').value;
        const accountId = document.getElementById('accountId').value;
        const hiddenUser = document.getElementById('hiddenUser').value;
        const messageSent = document.getElementById('messageSent').value;
        const relatedChatlog = document.getElementById('relatedChatlog').value;

        let filledReport = reportTemplate
            .replace('(Tell us about your report here, Please provide as much proof and information of their violation as possible)',"\n" + reportDesc)
            .replace('My account ID: ', `My account ID: ${accountId}\n`)
            .replace('Name of the hidden user: ', `Name of the hidden user: ${hiddenUser}\n`)
            .replace('A message that they sent: “ ”', `A message that they sent: “${messageSent}”`)
            .replace('Related chatlog/character images:', `Related chatlog/character images: ${relatedChatlog}`);

        localStorage.setItem('filledReport', filledReport);
        window.location.href = '/success/report.html';
    });
});

// Smooth scroll
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Menu mobile toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});