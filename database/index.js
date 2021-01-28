const mongoose = require('mongoose');

const DB_URL = process.env.CONNECTIONSTRING || 'mongodb://localhost/home';
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

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
  decreased: Boolean,
  new: Boolean,
  liked: Boolean,
  imageUrl: Array,
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
