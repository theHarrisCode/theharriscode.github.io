// function successPage() {
//     // form.getElementById("email-output").value = document.getElementById("email").value;
//     let email = document.getElementById("email").value;
//     alert(email);
// }

// function display (form) {
//     alert(email);
//     form.emailOutput.value = document.getElementById("email").value;
//     return false;
// }

// function homePage() {
//     window.location.href="index.html"
// }

document.addEventListener('DOMContentLoaded', function() {
    // const emailForm = document.getElementById("emailForm");
    const submitButton = document.getElementById("submitButton");

    submitButton.addEventListener('click', function () {
        const emailInput = document.getElementById("email");
        const userEmail = emailInput.value;

        if (userEmail) {
            localStorage.setItem('userEmail',userEmail);
            window.location.href = 'success.html';
        }
    });
});