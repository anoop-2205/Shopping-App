document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const firstNameInput = form.querySelector('input[name="FIRST name"]');
    const lastNameInput = form.querySelector('input[name="Last name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const passwordInput = form.querySelector('input[name="password"]');
    const registerButton = form.querySelector('.btn');
    
    registerButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value; 
        
  
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };
        
        let registeredUsers = localStorage.getItem('registeredUsers');
        if (!registeredUsers) {
            registeredUsers = {};
        } else {
            registeredUsers = JSON.parse(registeredUsers);
        }
        
        if (registeredUsers[email]) {
            alert('You are already registered!');
            return; 
        }
        
        registeredUsers[email] = newUser;
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
        
        alert('Registration successful!');
        
    });
});








