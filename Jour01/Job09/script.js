function tri(numbers, order) {
  if (order === "asc") {
      return numbers.sort((a, b) => a - b);
  } else if (order === "desc") {
      return numbers.sort((a, b) => b - a);
  } else {
      console.log("Ordre non reconnu. Utilisez 'asc' ou 'desc'.");
      return numbers; // Retourne le tableau non trié en cas d'ordre non reconnu
  }
}