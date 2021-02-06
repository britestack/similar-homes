const faker = require('faker');
const fs = require('fs');

const writeUsers = fs.createWriteStream('users.csv');
writeUsers.write('username, pword, email\n', 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 10000000;
  function write() {
    let ok = true;
    do {
      if (i % 50000 === 0) {
        console.log(`${i} records left to write!`);
      }
      i -= 1;
      const username = faker.internet.userName();
      const pword = faker.internet.password();
      const email = faker.internet.email();
      const data = `${username},${pword},${email}\n`;
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

writeTenMillionUsers(writeUsers, 'utf-8', () => {
  writeUsers.end();
});
