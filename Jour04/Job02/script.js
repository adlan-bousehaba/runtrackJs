const JsonValueKey = (json, key) => {
  const value = json[key];
  console.log('value', value);
  return value;
}

const json = {
  name: 'La Plateforme_',
  address: '8 rue d hozier',
  city: 'Marseille',
  nb_staff: '11',
  creation: '2019'
};

JsonValueKey(json, 'city'); // Affiche 'value2'