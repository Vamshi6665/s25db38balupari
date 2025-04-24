const mongoose = require("mongoose");

const hybridcarsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, "Car name must be at least 3 characters long"],
    maxLength: [50, "Car name must not exceed 50 characters"]
  },
  mileage_mpg: {
    type: Number,
    required: true,
    min: [10, "Mileage must be at least 10 MPG"],
    max: [100, "Mileage must not exceed 100 MPG"]
  },
  type: String
});

module.exports = mongoose.model("hybridcars", hybridcarsSchema);
