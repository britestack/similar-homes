const faker = require('faker');
const fs = require('fs');

const writeHomes = fs.createWriteStream('homes.csv');
writeHomes.write('dateListed,price,imageUrl,beds,baths,sqft,street,zipcode,city_name,state_name,score\n', 'utf8');

function getRandomInt(min, max) {
  return faker.random.number({
    min,
    max,
  });
}

function writeTenMillionHomes(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const dateListed = ;
      const imageUrl = ;
      const beds = getRandomInt(1, 10);
      const baths = getRandomInt(1, 10);
      const sqft = (beds + baths) * getRandomInt(200, 600);
      const price = sqft * getRandomInt(100, 800),
      const street = faker.address.streetAddress();
      const zipcode = faker.address.zipCode();
      const city_name = faker.address.city();
      const state_name = faker.address.stateAbbr();
      const score = price * sqft;
      const data = `${dateListed},${price},${imageUrl},${beds},${baths},${sqft},${street},${zipcode},${city_name},${state_name},${score}\n`;
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
write()
}

writeTenMillionUsers(writeHomes, 'utf-8', () => {
  writeHomes.end();
});