// import connection
const { connection } = require('../seedScripts/index');
const queryConnection = (queryString, response, successCode = 200, failCode = 400) => {
  connection.query(queryString)
    .then(({ rows }) => {
      response.status(successCode).send(rows[0]);
    })
    .catch((err) => {
      console.log(err);
      response.status(failCode).send(err);
    });
};
module.exports = {
  getUserInfo: (req, res) => {
    // get userid from req.params
    const { userid } = req.params;
    const queryString = `SELECT * FROM users WHERE user_id = ${userid}`;
    // returns success code of 200
    queryConnection(queryString, res);
    // returns info on user
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
  },
  removeUser: (req, res) => {
    // get userid from req.params
    // return success code of 200
  },
  updateUserSave: (req, res) => {
    // get user_id, home_id, and saved from req.body
    // return success code of 200
  },
  getHomeInfo: (req, res) => {
    // get homeid from req.params
    // return success code of 200
    // return home info
  },
  getNewHomes: (req, res) => {
    // get homeid from req.params
    // return 200 (update this in api page)
    // return info on all new homes
  },
  getSimilarHomes: (req, res) => {
    // get homeid from req.params
    // return 200 (update this in api page)
    // return info on all similar homes
  },
  addHome: (req, res) => {
    // get new home info from req.body
    // returns success code of 201
  },
  updateHomeInfo: (req, res) => {
    // get homeid from req.params
    // get updated home info from req.body
    // return success code of 200
    // return home info
  },
  removeHome: (req, res) => {
    // get homeid from req.params
    // return success code of 200
  },
};
