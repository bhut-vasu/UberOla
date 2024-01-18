var mongoose = require("mongoose");
const productschema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
});
module.exports = mongoose.model("ContactSchema", productschema);
