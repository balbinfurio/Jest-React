const cities = ['Ciudad de Mexico', 'Bogota', 'Lima', 'Buenos Aires', 'Guadalajara'];

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
};

module.exports = randomString; // this is the way to export
