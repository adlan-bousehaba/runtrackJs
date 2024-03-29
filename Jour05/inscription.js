
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


  function validatePostcode(postcode){
    var Reg = new RegExp(/^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/i);
    return Reg.test(postcode);
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

function validateName() {
  console.log('Validatename' );
  var nom = document.getElementById('nom').value;
  var prenom = document.getElementById('prenom').value;
  var password = document.getElementById('password').value;
  var codepostal = document.getElementById('code-postal').value;
  
  var nomAlert = document.getElementById('nom-alert');
  var prenomAlert = document.getElementById('prenom-alert');
  var code_postalAlert = document.getElementById('code-postal-alert');

  var isCodePostalValid = validatePostcode(codepostal);
  console.log('isCodePostalValid', isCodePostalValid);
  var isEmailValid = ValidateEmail();
  var isPasswordValid = validatePassword(password);

  
  nomAlert.style.display = nom.length < 5 ? 'block' : 'none';
  prenomAlert.style.display = prenom.length < 5 ? 'block' : 'none';
  document.getElementById('password-alert').style.display = isPasswordValid ? 'none' : 'block';
  document.getElementById('code-postal-alert').style.display = isCodePostalValid ? 'none' : 'block';


}

document.getElementById('button').addEventListener('click', validateName);

// window.onload = function() {
//   document.getElementById('myForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     console.log('sakht');
//     validateName()
//   });
// }