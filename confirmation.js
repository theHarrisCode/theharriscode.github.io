document.addEventListener('DOMContentLoaded', function() {
    const userEmailElement = document.getElementById('userEmail');
    const storedEmail = localStorage.getItem('userEmail');
    const dismissButton = document.getElementById('dismissButton');

    if (storedEmail) {
        userEmailElement.textContent = storedEmail;
    }

    else {
        window.location.href = 'index.html';
    }

    dismissButton.addEventListener('click', function () {
        window.location.href = 'index.html'
    })
});