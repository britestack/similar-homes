// import connection

module.exports = {
  getUserInfo: (req, res) => {
    // get userid from req.params
    // returns success code of 200
    // returns info on user
  },
  addUser: (req, res) => {
    // get new user info from req.body
    // returns success code of 201
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
