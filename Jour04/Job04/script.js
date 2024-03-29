let users = [];
async function loadUsers() {
    try {
        const response = await fetch('utilisateur.json');
        users = await response.json();
        console.log('users1', users);
    } catch (error) {
        console.error("Erreur lors du chargement du fichier JSON:", error);
    }
  }
  
  
  
  
  async function insertUsersIntoTable() {
    await loadUsers();
    const table = document.getElementById('tbody');
    // table.innerHTML = ''; // Clear the table before inserting new data
    console.log('users2', users);
    users.forEach(user => {
      const row = table.insertRow();
      const idCell = row.insertCell();
      const nameCell = row.insertCell();
      const firstnameCell = row.insertCell();
      const emailCell = row.insertCell();

      idCell.textContent = user.id;
      nameCell.textContent = user.nom;
      firstnameCell.textContent = user.prenom;
      emailCell.textContent = user.email;
    });
  }

  document.getElementById('button').addEventListener('click', insertUsersIntoTable);
  
// insertUsersIntoTable();