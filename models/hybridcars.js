const mongoose = require("mongoose")
const hybridcarsSchema = mongoose.Schema({
name: String,
mileage_mpg: Number,
type: String
})
module.exports = mongoose.model("hybridcars",
hybridcarsSchema)