citations_blade_runner = [
  "J'ai vu des choses que vous, humains, ne pourriez pas imaginer. Des navires de combat en feu surgissant de l'orbite de Tannhäuser. J'ai vu des rayons C briller dans l'obscurité près de la Porte de Tannhäuser. Et tous ces moments se perdront dans le temps, comme des larmes dans la pluie. Il est temps de mourir.",
  "C'est tout ce que les photos sont, la preuve que tu existais.",
  "Tous ces moments se perdront dans le temps, comme des larmes dans la pluie.",
  "J'espérais pouvoir discuter avec vous, mais je peux voir que vous êtes très occupé.",
  "Si vous n'êtes pas avec nous, vous êtes contre nous.",
  "Je fais ce petit travail pour moi-même, Deckard. Ça ne me dérange pas de partager.",
  "Les rêves androides rêvent-ils de moutons électriques ?",
  "Je veux plus de vie, père.",
  "Vous avez fait un travail de détective. Vous avez trouvé des indices. C'est ce que font les détectives.",
  "La lumière qui brille avec le double d'intensité brûle la moitié moins longtemps, et vous avez brûlé très, très vivement, Roy."
]

var jumboTitle1 = "Bonjour, monde!"
var jumboTitle2 = "Bonjour, monde!2"
var jumboTitle3 = "Bonjour, monde!3"

var jumboTitle = {
  "1": jumboTitle1,
  "2": jumboTitle2,
  "3": jumboTitle3
};


function rebootWorld () {
  var randomIndex = Math.floor(Math.random() * citations_blade_runner.length);
  var randomCitation1 = citations_blade_runner[randomIndex];

  var randomCitation2;
  do {
    var randomIndex2 = Math.floor(Math.random() * citations_blade_runner.length);
    randomCitation2 = citations_blade_runner[randomIndex2];
  } while (randomCitation2 === randomCitation1);


  $("#lead-1").text(randomCitation1);
  $("#lead-2").text(randomCitation2);
}

function checkFields() {
  var email = $("#exampleFormControlInput1").val();
  var password = $("#exampleFormControlInput2").val();
  var spinner = $("#spinner").val();
  console.log('check');
  if (email.length !== 0  || password.length !== 0) {
    $('#spinner').removeClass('text-info')
    $('#spinner').addClass('text-warning')
  } else {
    $('#spinner').removeClass('text-warning')
    $('#spinner').addClass('text-info')
  }
}

$(document).ready(function(){
  $("#reboot-button").click(function(){
    rebootWorld()
  });



  $(".page-link").click(function(e) {
    e.preventDefault(); // Empêche le comportement par défaut du lien

    // Supprime la classe 'active' de tous les éléments
    $(".page-item").removeClass("active");

    // Ajoute la classe 'active' à l'élément parent du lien cliqué
    $(this).parent().addClass("active");
    console.log('this', this.text);
    linkText = $(this).text()
    $("#jumbo-title").text(jumboTitle[linkText])
  });



  $(".list-group-item").click(function() {
    // Supprime la classe 'active' de tous les éléments
    $(".list-group-item").removeClass("active");

    // Ajoute la classe 'active' à l'élément cliqué
    $(this).addClass("active");
  });

  $(".progress").click(function(e) {
    var progressBar = $(this).find(".progress-bar");

    // Calcule la position du clic en pourcentage
    var clickPosition = (e.pageX - $(this).offset().left) / $(this).width();

    // Obtient la largeur actuelle de la barre de progression en pourcentage
    var currentWidth = parseFloat(progressBar[0].style.width) / 100;

    // Si le clic a eu lieu dans la moitié gauche de la barre de progression, diminue la largeur de 10%
    // Sinon, augmente la largeur de 10%
    if (clickPosition < 0.5) {
      currentWidth = Math.max(0, currentWidth - 0.1);
    } else {
      currentWidth = Math.min(1, currentWidth + 0.1);
    }

    // Met à jour la largeur de la barre de progression
    progressBar.css("width", (currentWidth * 100) + "%");
  });

  $("#exampleFormControlInput1, #exampleFormControlInput2").on('input', function() {
    checkFields();
  });

})