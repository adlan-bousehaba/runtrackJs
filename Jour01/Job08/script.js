function estPremier(nombre) {
  for(let i = 2, s = Math.sqrt(nombre); i <= s; i++)
      if(nombre % i === 0) return false; 
  return nombre > 1;
}

function sommeNombresPremiers(nombre1, nombre2) {
  if (estPremier(nombre1) && estPremier(nombre2)) {
      return nombre1 + nombre2;
  } else {
      return false;
  }
}