const faker = require('faker');
const fs = require('fs');
const { connection } = require('./index');

const writeSimilar = fs.createWriteStream('users.csv');
writeSimilar.write('base_home_id, related_home_id\n', 'utf8');

function async writeAllSimilar(writer, encoding, callback) {
  let i = 2;
  function write() {
    let ok = true;
    do {
      if (i % 100000 === 0) {
        console.log(`${i} records left to write!`);
      }
      i -= 1;
      base_home_id = 0;
      await connection.query(`SELECT zipcode from homes where home_id = 1`)
      .then(({ rows }) => {
        let zip = rows[0].zipcode;
        let queryString = `
          SELECT home_id
          FROM homes
          WHERE zipcode = '${zip}'
          ORDER BY datelisted DESC
          LIMIT 8
        `;
        return connection.query(queryString)
          .then(({ rows }) => {
            rows.forEach((row) => {
              let related_home_id = row.home_id;
              const data = `${base_home_id},${related_home_id}\n`;
              if (i === 0) {
                writer.write(data, encoding, callback);
              } else {
                ok = writer.write(data, encoding);
              }
            });
          })
          .catch((err) => console.log(err));
      });
      //const data = `${base_home_id},${related_home_id}\n`;

      base_home_id += 1;
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeAllSimilar(writeSimilar, 'utf-8', () => {
  writeSimilar.end();
});
