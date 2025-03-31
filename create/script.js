const form = document.getElementById('createAccountForm');
        const firstnameInput = document.getElementById('firstname');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const ageInput = document.getElementById('age');
        const createAccountBtn = document.getElementById('createAccountBtn');
        const firstnameError = document.getElementById('firstnameError');
        const passwordError = document.getElementById('passwordError');
        const confirmPasswordError = document.getElementById('confirmPasswordError');
        const ageError = document.getElementById('ageError');

        function validateForm() {
            let isValid = true;

            firstnameError.textContent = '';
            passwordError.textContent = '';
            confirmPasswordError.textContent = '';
            ageError.textContent = '';

            if (firstnameInput.value.trim() === '') {
                firstnameError.textContent = 'First name cannot be empty';
                isValid = false;
            }

            if (passwordInput.value.trim() === '') {
                passwordError.textContent = 'Password cannot be empty';
                isValid = false;
            }

             if (confirmPasswordInput.value.trim() === '') {
                confirmPasswordError.textContent = 'Confirm Password cannot be empty';
                isValid = false;
            } else if (passwordInput.value !== confirmPasswordInput.value) {
                confirmPasswordError.textContent = 'Passwords do not match';
                isValid = false;
            }

            if (ageInput.value.trim() === '') {
                ageError.textContent = 'Age cannot be empty';
                isValid = false;
            }

            createAccountBtn.disabled = !isValid;
            return isValid;
        }

        firstnameInput.addEventListener('input', validateForm);
        passwordInput.addEventListener('input', validateForm);
        confirmPasswordInput.addEventListener('input', validateForm);
        ageInput.addEventListener('input', validateForm);

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm()) {
                alert('Account created successfully!');
            }
        });