const { connection } = require('./index');

const f = async () => {
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
            console.log(row.home_id);
          });
        })
        .catch((err) => console.log(err));
    });

  connection.end();
};

f();
