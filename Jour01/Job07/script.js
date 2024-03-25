function jourTravaille(date) {
  const joursFeries = [
      "2024-01-01", "2024-04-01", "2024-05-01", 
      "2024-05-08", "2024-05-30", "2024-07-14", 
      "2024-08-15", "2024-11-01", "2024-11-11", "2024-12-25"
  ];
  const dateVerif = new Date(date);
  const dateString = dateVerif.toISOString().split('T')[0]; // Format YYYY-MM-DD

  if (joursFeries.includes(dateString)) {
      console.log(`Le ${dateString} est un jour férié.`);
  } else if (dateVerif.getDay() === 0 || dateVerif.getDay() === 6) {
      console.log(`Non, le ${dateString} est un week-end.`);
  } else {
      console.log(`Oui, le ${dateString} est un jour travaillé.`);
  }
}