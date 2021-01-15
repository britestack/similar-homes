const models = require('./models.js');

const getAllHomes = (req, res) => {
  models.getAll((err, results) => {
    if (err) {
      res.status(500).send('Failed to get all homes');
    } else {
      res.status(200).json(results);
    }
  });
};

const getNearbyHomes = (req, res) => {
  models.getNearby((err, results) => {
    if (err) {
      res.status(500).send('Failed to get nearby homes');
    } else {
      res.status(200).json(results);
    }
  });
};

const getSimilarHomes = (req, res) => {
  models.getSimilar((err, results) => {
    if (err) {
      res.status(500).send('Failed to get similar homes');
    } else {
      res.status(200).json(results);
    }
  });
};

const updateLiked = (req, res) => {
  let id = req.params.id;
  models.toggleOnLike(id, (err, results) => {
    if (err) {
      res.status(500).send('Failed update home to liked list');
    } else {
      res.status(200).json(results);
    }
  });
};

module.exports = {
  getAllHomes, getNearbyHomes, getSimilarHomes, updateLiked,
};
