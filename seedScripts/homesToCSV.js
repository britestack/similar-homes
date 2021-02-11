const faker = require('faker');
const fs = require('fs');

const writeHomes = fs.createWriteStream('homes.csv');
writeHomes.write('dateListed,price,imageUrl,beds,baths,sqft,street,zipcode,city_name,state_name,score,realtor,decreased\n', 'utf8');

function getRandomInt(min, max) {
  return faker.random.number({
    min,
    max,
  });
}

function writeTenMillionHomes(writer, encoding, callback) {
  let i = 1000000;
  console.log('getting started, ', i);
  function write() {
    let ok = true;
    do {
      if (i % 50000 === 0) {
        console.log(`${i} records left to write!`);
      }
      i -= 1;
      const year = getRandomInt(2000, 2021);
      const month = getRandomInt(1, 12);
      // may make some futuristic homes! woops
      const day = getRandomInt(1, 28);
      const dateListed = (year * 10000) + (month * 100) + day;
      const imageIndex = i % 333; //number photos in s3
      const imageUrl = `https://fec-house-photos.s3-us-west-1.amazonaws.com/${imageIndex}.jpg`;
      const beds = getRandomInt(1, 10);
      const baths = getRandomInt(1, 10);
      const sqft = (beds + baths) * getRandomInt(200, 600);
      const price = sqft * getRandomInt(100, 800);
      const street = faker.address.streetAddress();
      const zipcode = faker.address.zipCode('#####');
      const city_name = faker.address.city();
      const state_name = faker.address.stateAbbr();
      const score = Math.floor((price * sqft) / 1000000);
      const realtor = faker.name.findName();
      const decreased = faker.random.boolean();
      const data = `${dateListed},${price},${imageUrl},${beds},${baths},${sqft},${street},${zipcode},${city_name},${state_name},${score},${realtor},${decreased}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMillionHomes(writeHomes, 'utf-8', () => {
  writeHomes.end();
});
