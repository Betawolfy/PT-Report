document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const filledTemplate = document.getElementById('filledTemplate');
    const copyButton = document.getElementById('copyButton');

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
});