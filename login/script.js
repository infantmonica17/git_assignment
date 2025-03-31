function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var messageDiv = document.getElementById("message");

    var users = JSON.parse(localStorage.getItem('users') || '[]');
    var user = users.find(u => u.username === username);
    
    if (!user) {
        messageDiv.textContent = "User not exists. Please create a new user account.";
        messageDiv.className = 'error';
    } else if (user.password === password) {
        messageDiv.textContent = "Logged in successfully";
        messageDiv.className = 'success';
    } else {
        messageDiv.textContent = "Password not matching";
        messageDiv.className = 'error';
    }

    const newUser = {
                firstName: firstName,
                lastName: lastName,
                email: email
            };

            userList.push(newUser);

localStorage.setItem('userList', JSON.stringify(userList));

}