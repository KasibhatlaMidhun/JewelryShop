const form = document.getElementById('form');
const usename = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showWrong(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control wrong';
    const smaal = formControl.querySelector('small');
    smaal.innerText = message;
}

// Show success outline
function showRight(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control right';
}

// Check email validation
function validateEmail(input) {
const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
return mailformat.test(String(input));
}

// Check password Validation
function validatePassword(input){
    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return passw.test(input.value);
}

// Check passwords match
function checkPasswordMatch(input1, input2) {
    if (input2.value !== '' && input1.value !== input2.value) {
        showWrong(input2, 'Passwords do not match')
    }
}

// Event Listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
if(username.value === '') {
    showWrong(username, 'Username is required');
} else if (username.value.length < 3) {
    showWrong(username, 'Username must be atleast 3 characters');
}else {
    showRight(username);
  }

  if(email.value === '') {
    showWrong(email, 'Enter your email');
} else if (!validateEmail(email.value)) {
    showWrong(email, "Kindly enter valid email");
} else {
    showRight(email);
}

if(password.value === '') {
    showWrong(password, 'Set a password');
} else if (!validatePassword(password)) {
    showWrong(password,'Invalid password');
}else {
    showRight(password);
}

if(password2.value === '') {
    showWrong(password2, 'Please confirm password');
} else {
    showRight(password2);
}

checkPasswordMatch(password, password2);
})