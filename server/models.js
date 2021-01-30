const Home = require('../database');

const getAll = (callback) => {
  Home.find({}, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

const getNearby = (id, callback) => {
  Home.find({}, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  }).sort({ _id: -1 }).limit(16);
};

const getSimilar = (id, callback) => {
  Home.find({}, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  }).sort({ _id: 1 }).limit(16);
};

const toggleOnLike = (id, callback) => {
  Home.updateOne({ _id: id }, { liked: true }, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  getAll, getNearby, getSimilar, toggleOnLike,
};
