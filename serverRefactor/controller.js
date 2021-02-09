// import connection
const { connection } = require('../seedScripts/index');
const queryConnection = (queryString, response, successCode = 200, failCode = 400) => {
  connection.query(queryString)
    .then(({ rows }) => {
      response.status(successCode).send(rows);
    })
    .catch((err) => {
      console.log(err);
      response.status(failCode).send(err);
    });
};
module.exports = {
  getUserInfo: (req, res) => {
    // get userid from req.params
    // returns success code of 200
    // returns info on user
    const { userid } = req.params;
    const queryString = `SELECT * FROM users WHERE user_id = ${userid}`;
    queryConnection(queryString, res);
  },
  addUser: (req, res) => {
    // get new user info from req.body
    // returns success code of 201
    const { username, pword, email } = req.body;
    const queryString = `INSERT INTO users(username, pword, email) VALUES('${username}', '${pword}', '${email}')`;
    queryConnection(queryString, res, 201);
  },
  updateUserInfo: (req, res) => {
    // get userid from req.params
    // get updated user info from req.body
    // return success code of 200
    // return user info
    const { userid } = req.params;
    const { username, pword, email } = req.body;
    const queryString = `UPDATE users SET (username, pword, email) = ('${username}', '${pword}', '${email}') where user_id = ${userid}`;
    queryConnection(queryString, res, 200);
  },
  removeUser: (req, res) => {
    // get userid from req.params
    // return success code of 200
    const { userid } = req.params;
    const queryString = `DELETE FROM users WHERE user_id = ${userid} CASCADE`;
    queryConnection(queryString, res);
  },
  updateUserSave: (req, res) => {
    // get user_id, home_id, and saved from req.body
    // return success code of 200
    const { user_id, home_id, saved } = req.body;
    if (saved) {
      const queryString = `INSERT INTO usersaves(user_id, home_id) VALUES('${user_id}', '${home_id}')`;
      const success = 201;
    } else {
      const queryString = `DELETE FROM usersaves WHERE user_id = ${user_id} AND home_id = ${home_id}`;
      const success = 200;
    }
    queryConnection(queryString, res, success);
  },
  getHomeInfo: (req, res) => {
    // get homeid from req.params
    // return success code of 200
    // return home info
    const { homeid } = req.params;
    const queryString = `SELECT * FROM homes WHERE home_id = ${homeid}`;
    queryConnection(queryString, res);
  },
  getNewHomes: (req, res) => {
    // get homeid from req.params
    // return 200 (update this in api page)
    // return info on all new homes
    const { homeid } = req.params;
    const queryString = `SELECT * FROM homes WHERE zipcode IN (SELECT zipcode FROM homes WHERE home_id = ${homeid}) AND home_id != ${homeid} ORDER BY datelisted DESC LIMIT 20`;
    queryConnection(queryString, res);
  },
  getSimilarHomes: (req, res) => {
    // get homeid from req.params
    // return 200 (update this in api page)
    // return info on all similar homes
    const { homeid } = req.params;
    const queryString = `SELECT * FROM homes WHERE zipcode IN (SELECT zipcode FROM homes WHERE home_id = ${homeid}) AND beds > ((SELECT beds FROM homes WHERE home_id = ${homeid}) - 2) AND beds < ((SELECT beds FROM homes WHERE home_id = ${homeid}) + 2) AND price > ((SELECT price FROM homes WHERE home_id = ${homeid}) * .71) AND price < ((SELECT price FROM homes WHERE home_id = ${homeid}) * 1.4) AND home_id != ${homeid}`;
    queryConnection(queryString, res);
  },
  addHome: (req, res) => {
    // get new home info from req.body
    // returns success code of 201
    const { datelisted, price, imageUrl, beds, baths, sqft, street, zipcode, city_name, state_name, score, realtor, decreased } = req.body;
    const queryString = `INSERT INTO homes(datelisted, price, imageurl, beds, baths, sqft, street, zipcode, city_name, state_name, score, realtor, decreased) VALUES(${datelisted}, ${price}, '${imageUrl}', ${beds}, ${baths}, ${sqft}, '${street}', ${zipcode}, '${city_name}', '${state_name}', ${score}, '${realtor}', ${decreased})`;
    queryConnection(queryString, res, 201);
  },
  updateHomeInfo: (req, res) => {
    // get homeid from req.params
    // get updated home info from req.body
    // return success code of 200
    // return home info
    const { homeid } = req.params;
    const { datelisted, price, imageUrl, beds, baths, sqft, street, zipcode, city_name, state_name, score, realtor, decreased } = req.body;
    const queryString = `UPDATE homes SET (datelisted, price, imageurl, beds, baths, sqft, street, zipcode, city_name, state_name, score, realtor, decreased) = (${datelisted}, ${price}, '${imageUrl}', ${beds}, ${baths}, ${sqft}, '${street}', ${zipcode}, '${city_name}', '${state_name}', ${score}, '${realtor}', ${decreased}) WHERE home_id = ${homeid}`;
    queryConnection(queryString, res, 200);
  },
  removeHome: (req, res) => {
    // get homeid from req.params
    // return success code of 200
    const { homeid } = req.params;
    const queryString = `DELETE FROM homes WHERE home_id = ${homeid}`;
    queryConnection(queryString, res);
  },
};
