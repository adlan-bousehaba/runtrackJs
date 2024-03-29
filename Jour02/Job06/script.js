const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (event) => {
    if (event.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            document.body.innerHTML += '<div class="konami">La Plateforme_ vous salue, noble aventurier !</div>';
            document.body.classList.add('konami-style');
            konamiIndex = 0; // Réinitialiser l'index pour permettre de réactiver le code.
        }
    } else {
        konamiIndex = 0; // Réinitialiser l'index si la séquence est incorrecte.
    }
});
