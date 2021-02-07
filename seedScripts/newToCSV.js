/* eslint-disable camelcase */
const faker = require('faker');
const fs = require('fs');
const { connection } = require('./index');

const writeSimilar = fs.createWriteStream('similar.csv');
writeSimilar.write('base_home_id, related_home_id\n', 'utf8');

const writeAllSimilar = (writer, encoding, callback) => {
  let i = 10000000;
  console.log('getting started');
  const write = async () => {
    let ok = true;
    let base_home_id = 1;
    do {
      if (i % 10000 === 0) {
        console.log(`${i} records left to write!`);
      }
      i -= 1;
      let { rows } = await connection.query(`SELECT zipcode from homes where home_id = ${base_home_id}`);
      const zip = rows[0].zipcode;
      const queryString = `
        SELECT home_id
        FROM homes
        WHERE datelisted > 20210101
        AND zipcode = ${zip}
        LIMIT 8
      `;
      let result = await connection.query(queryString);
      rows = result.rows;
      for (let j = 0; j < rows.length; j += 1) {
        let row = rows[j];
        let related_home_id = row.home_id;
        if (related_home_id === base_home_id) {
          continue;
        }
        const data = `${base_home_id},${related_home_id}\n`;
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      }
      base_home_id += 1;
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  };
  write();
};

writeAllSimilar(writeSimilar, 'utf-8', () => {
  writeSimilar.end();
  connection.end();
});
