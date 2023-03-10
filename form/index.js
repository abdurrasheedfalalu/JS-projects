const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm password');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkInputs();
});

function checkInputs () {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be empty.');
    }else{
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be empty.');
    }else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid.')
    }else{
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be empty.');
    }else{
        setSuccessFor(password);
    }

    if (confirmPasswordValue === '') {
        setErrorFor(confirmPassword, 'confirm password cannot be empty.');
    }else if (confirmPasswordValue !== passwordValue) {
        setErrorFor(confirmPassword, 'Passwords must match.')
    }else{
        setSuccessFor(confirmPassword);
    }
    
}

function setErrorFor (input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error'
}

function setSuccessFor (input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function isEmail (email) {
    return  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
}