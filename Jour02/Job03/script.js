document.getElementById('button').addEventListener('click', addOne);

function addOne() {
    let compteur = document.getElementById('compteur');
    let nombre = parseInt(compteur.textContent, 10);
    compteur.textContent = nombre + 1;
}
