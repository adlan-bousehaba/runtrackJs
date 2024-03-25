function bisextile(année) {
  return (année % 4 === 0 && année % 100 !== 0) || (année % 400 === 0);
}