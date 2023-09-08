document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const emailInput = form.querySelector('input[name="email"]');
    const passwordInput = form.querySelector('input[name="password"]');
    const loginButton = form.querySelector('.btn');

    loginButton.addEventListener('click', function (event) {
        event.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        let users_info = JSON.parse(localStorage.getItem('registeredUsers'));

        if (!users_info) {
            alert('No registered users found. Please register first.');
            return;
        }

        if (users_info[email] && users_info[email].password === password) {
            
            
             window.location.href = "../index.html";

           
        } else {
            alert('Invalid email or password. Please try again.');
        }
    });
});




