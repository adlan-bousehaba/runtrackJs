

function ValidateEmail() {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@laplateforme\.io$/;
  var email = document.getElementById('email').value;
  var emailAlert = document.getElementById('email-alert');
  console.log(email.endsWith('@laplateforme.io'))
  if (!email.match(validRegex) || !email.endsWith('@laplateforme.io') || email.length === 0) {
    console.log('isNotValid')
    console.log('email.match(validRegex)', email.match(validRegex));
    console.log('email.endsWith(@laplateforme.io)', email.endsWith('@laplateforme.io'));
    console.log('email.length', email.length);
    emailAlert.classList.remove('hidden')
    emailAlert.classList.add('block')
    return false;
  } else {
    console.log('isValid')
    emailAlert.classList.remove('block')
    emailAlert.classList.add('hidden')
    return true;
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

  passwordAlert.style.display = isPasswordValid ? 'none' : 'block';
  if (isPasswordValid && isEmailValid) {
    window.location.href = 'user.html';
  }
  return isEmailValid && isPasswordValid;
}

document.getElementById('button').addEventListener('click', ValidateForm);