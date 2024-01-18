var mongoose = require("mongoose");
const productschema = new mongoose.Schema({
  email: {
    type: String,
  }
});
module.exports = mongoose.model("Newsletter", productschema);
