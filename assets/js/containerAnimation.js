document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.container, .container-animation');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    containers.forEach(container => {
        observer.observe(container);
    });
});