const faker = require('faker');
const Home = require('./index.js');

const getRandomIntInclusive = (min, max) => (
  Math.floor(Math.random() * (max - min + 1) + min));

const isNew = () => {
  const x = getRandomIntInclusive(0, 1);
  return x === 1;
};

const createFakeHome = (images) => {
  const home = {};
  home.new = isNew();
  home.liked = false;
  home.imageUrl = images;
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

const getImageUrls = (num) => {
  // Set houseNum to num % number of house images available
  const houseNum = num % 21;
  const images = [];

  for (let i = 1; i <= 3; i += 1) {
    const house = `https://homeimgs.s3-us-west-1.amazonaws.com/truliaHomes/${houseNum}.${i}.jpg`;
    images.push(house);
  }

  return images;
};

const prepareDocuments = (num) => {
  const sampleHomes = [];
  for (let i = 1; i <= num; i += 1) {
    const imgArr = getImageUrls(num);
    const newHome = createFakeHome(imgArr);
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

seedHomes(101);
