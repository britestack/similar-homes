const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/home', { useNewUrlParser: true, useUnifiedTopology: true });

const sizeSchema = new mongoose.Schema({
  beds: Number,
  baths: Number,
  sqft: Number,
});

const addressSchema = new mongoose.Schema({
  street: String,
  neighborhood: String,
  city: String,
  state: String,
});

const homeSchema = new mongoose.Schema({
  new: Boolean,
  liked: Boolean,
  imageUrl: String,
  price: Number,
  size: {
    type: sizeSchema,
    default: {},
  },
  address: {
    type: addressSchema,
    default: {},
  },
  realtor: String,
});

const Home = mongoose.model('Home', homeSchema);

module.exports = Home;
