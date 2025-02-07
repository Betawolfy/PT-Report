document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const filledTemplate = document.getElementById('filledTemplate');
    const copyButton = document.getElementById('copyButton');
    const mailtoButton = document.getElementById('createMailto');

    // Get filled report from local storage
    filledTemplate.value = localStorage.getItem('filledReport');

    // Copy report to clipboard
    copyButton.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(filledTemplate.value);
            alert('Report copied to clipboard! You can send it to the support team now.');
        } catch (err) {
            alert('Error while copying the report to clipboard.');
        }
    });

    // Create mailto link
    mailtoButton.addEventListener('click', () => {
        let reportContent = filledTemplate.value;
        const subject = "PonyTown Report";
        const body = encodeURIComponent(reportContent).replace(/%0A/g, '%0D%0A');
        const mailtoLink = `mailto:ponytownhelp@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    });
});