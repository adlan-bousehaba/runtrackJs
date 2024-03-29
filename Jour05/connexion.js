

function ValidateEmail() {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var email = document.getElementById('email').value;
  var emailAlert = document.getElementById('email-alert');
  if(email.length == 0){
    emailAlert.style.display = 'block';
    return false;
  }
  if (email.match(validRegex)) {
    emailAlert.style.display = 'none';
    return true;

  } else {

    emailAlert.style.display = 'block';
    return false;
  }

}


function validatePassword(password) {
  // Vérifie la longueur minimale de 8 caractères
  const isLongEnough = password.length >= 8;
  // Vérifie la présence d'au moins une lettre
  const hasLetter = /[a-zA-Z]/.test(password);
  // Vérifie la présence d'au moins un chiffre
  const hasDigit = /\d/.test(password);
  // Vérifie la présence d'au moins un caractère spécial
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return isLongEnough && hasLetter && hasDigit && hasSpecialChar;
}

function ValidateForm() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var emailAlert = document.getElementById('email-alert');
  var passwordAlert = document.getElementById('password-alert');
  var isEmailValid = ValidateEmail();
  var isPasswordValid = validatePassword(password);

  emailAlert.style.display = email.length == 0 ? 'block' : 'none';
  passwordAlert.style.display = isPasswordValid ? 'none' : 'block';
  return isEmailValid && isPasswordValid;
}

document.getElementById('button').addEventListener('click', ValidateForm);
