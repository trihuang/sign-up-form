const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const errorMessage = document.querySelector('.error-msg');

password.addEventListener('input', checkPassword);
confirmPassword.addEventListener('input', checkPassword);

function checkPassword(e) {
    const pwdField = e.target.id;
    if (pwdField === 'password') {
        const confirmPwd = document.getElementById('confirm-password').value;
        if (e.target.value !== confirmPwd) {
            errorMessage.textContent = "* Passwords do not match";
            password.style.borderColor = "red";
            confirmPassword.style.borderColor = "red";
        } else {
            errorMessage.textContent = "";
            password.style.borderColor = "#E5E7EB";
            confirmPassword.style.borderColor = "#E5E7EB";
        }
    } else if (pwdField === 'confirm-password') {
        const pwd = document.getElementById('password').value;
        if (e.target.value !== pwd) {
            errorMessage.textContent = "* Passwords do not match";
            password.style.borderColor = "red";
            confirmPassword.style.borderColor = "red";
        } else {
            errorMessage.textContent = "";
            password.style.borderColor = "#E5E7EB";
            confirmPassword.style.borderColor = "#E5E7EB";
        }
    }
}