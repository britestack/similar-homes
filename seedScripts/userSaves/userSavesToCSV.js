/* eslint-disable camelcase */
const faker = require('faker');
const fs = require('fs');

const writeUserSaves = fs.createWriteStream('seedScripts/userSaves/userSaves.csv');
writeUserSaves.write('user_id, home_id\n', 'utf8');

function getRandomInt(min, max) {
  return faker.random.number({
    min,
    max,
  });
}

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 10000000;
  function write() {
    let ok = true;
    let user_id = 20000002;
    do {
      if (i % 50000 === 0) {
        console.log(`${i} records left to write!`);
      }
      const numSaved = getRandomInt(0, 4);
      for (let j = 0; j < numSaved; j += 1) {
        const home_id = getRandomInt(0, 10000000);
        const data = `${user_id},${home_id}\n`;
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      }
      i -= 1;
      user_id += 1;
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMillionUsers(writeUserSaves, 'utf-8', () => {
  writeUserSaves.end();
});
