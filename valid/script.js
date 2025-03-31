document.getElementById('createAccountForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');

    let userList = JSON.parse(localStorage.getItem('userList')) || [];

    const emailExists = userList.some(user => user.email === email);

    if (emailExists) {
        emailError.textContent = "The email id is already in use. Please use another email id to create the account.";
        return;
    } else {
        emailError.textContent = "";
    }

    const newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email
    }

    userList.push(newUser);

    localStorage.setItem('userList', JSON.stringify(userList));

    alert('Account created successfully!');
    document.getElementById('createAccountForm').reset();
});
