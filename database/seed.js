const Home = require('./index.js');
const faker = require('faker');

const sampleImgs = [];

const getRandomIntInclusive = (min, max) => (
  Math.floor(Math.random() * (max - min + 1) + min));

const isNew = () => {
  const x = getRandomIntInclusive(0, 1);
  return x === 1;
};

const createFakeHome = () => {
  const home = {};
  home.new = isNew();
  home.liked = false;
  home.imageUrl = 'placeholder';
  home.price = getRandomIntInclusive(10, 30) * 1000000;
  home.size = {
    beds: getRandomIntInclusive(2, 8),
    baths: getRandomIntInclusive(2, 8),
    sqft: getRandomIntInclusive(4000, 10000),
  };
  home.address = {
    street: faker.address.streetAddress(),
    neighborhood: faker.address.county(),
    city: faker.address.city(),
    state: faker.address.state(),
  };
  home.realtor = `${faker.name.findName()} - ${faker.company.companyName()}`;
  return home;
};

const prepareDocuments = (num) => {
  let sampleHomes = [];
  for (let i = 0; i <= num; i += 1) {
    let newHome = createFakeHome();
    sampleHomes.push(newHome);
  }
  return sampleHomes;
};

const seedHomes = (num) => {
  Home.create(prepareDocuments(num), (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
    }
  });
};

seedHomes(100);
