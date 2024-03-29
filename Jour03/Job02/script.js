$(document).ready(function() {
  $('#shuffle-button').click(function() {
      // Déplacer les images de container vers img-container avant le mélange
      var $imagesFromSorting = $('#container img').appendTo('#img-container');
      
      // Mélanger toutes les images dans img-container
      var $allImages = $('#img-container img');
      $allImages.sort(function() {
          return 0.5 - Math.random();
      }).appendTo('#img-container');

      // Réinitialiser le message
      $('#message').text('');
  });

  $('#img-container').on('click', 'img', function() {
      // Déplacer l'image cliquée vers container
      $(this).appendTo('#container');
      checkOrder();
  });

  function checkOrder() {
      var isCorrectOrder = true;
      var lastColor = 0;
      $('#container img').each(function() {
          var color = $(this).data('color');
          if (color < lastColor) {
              isCorrectOrder = false;
              return false; // Break the loop
          }
          lastColor = color;
      });

      if (isCorrectOrder && $('#container img').length === 6) {
          $('#message').text("Vous avez gagné").css('color', 'green');
      } else if ($('#container img').length === 6) {
          $('#message').text("Vous avez perdu").css('color', 'red');
      } else {
          $('#message').text(""); // Réinitialiser le message si le jeu n'est pas terminé
      }
  }
});
