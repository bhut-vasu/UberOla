var mongoose = require("mongoose");
const productschema = new mongoose.Schema({
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  Phone: {
    type: String,
  },
  email: {
    type: String,
  },
  age: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  zipCode: {
    type: String,
  },
  carType: {
    type: String,
  },
  pickUp: {
    type: String,
  },
  dropOff: {
    type: String,
  },
  pickTime: {
    type: String,
  },
  dropTime: {
    type: String,
  },
});
module.exports = mongoose.model("bookingSchema", productschema);
