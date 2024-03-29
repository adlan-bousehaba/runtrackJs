// Charger les Pokémon une seule fois au démarrage de l'application
let allPokemons = []; // Ceci stockera tous les Pokémon chargés
async function loadPokemonTypes() {
    try {
        const response = await fetch('pokemon.json');
        allPokemons = await response.json();
    } catch (error) {
        console.error("Erreur lors du chargement du fichier JSON:", error);
    }
}
loadPokemonTypes(); // Appel initial pour charger les données

document.getElementById('form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Empêche le formulaire d'être soumis de manière traditionnelle

    // Extraction des données du formulaire
    const formData = new FormData(event.target);
    const id = formData.get('id');
    const nom = formData.get('nom');
    const type = formData.get('type');

    // Filtrage des Pokémon en fonction des données du formulaire
    const filteredPokemons = allPokemons.filter(pokemon => {
      return (!id || pokemon.id == id) &&
           (!nom || pokemon.name.english.toLowerCase().includes(nom.toLowerCase()) ||
          pokemon.name.japanese.toLowerCase().includes(nom.toLowerCase()) ||
          pokemon.name.chinese.toLowerCase().includes(nom.toLowerCase()) ||
          pokemon.name.french.toLowerCase().includes(nom.toLowerCase())) &&
           (!type || type === 'All' || pokemon.type.includes(type));
    });

    // console.log(filteredPokemons);

    // Affichage de la liste sur la page HTML
    const pokemonList = document.getElementById('pokemon-list');
    pokemonList.innerHTML = ''; // Efface le contenu précédent de la liste

    filteredPokemons.forEach(pokemon => {
      const listItem = document.createElement('li');
      
      for (const key in pokemon) {
        if (pokemon.hasOwnProperty(key)) {
          const value = pokemon[key];
          if (typeof value === 'object') {
            // Si la valeur est un objet ou un tableau, nous la convertissons en chaîne de caractères JSON
            listItem.textContent += `${key}: ${JSON.stringify(value)}, `;
          } else {
            listItem.textContent += `${key}: ${value}, `;
          }
        }
      }
    
      console.log('listItem', listItem);
      pokemonList.appendChild(listItem);
    });
});
