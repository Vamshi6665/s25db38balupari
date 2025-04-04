var express = require('express');
var router = express.Router();

/* GET hybrid cars page. */
router.get('/', function(req, res, next) {
  // Define the results array in the backend
  var results = [
    { name: "Toyota Prius", mileage_mpg: 56, type: "Hybrid" },
    { name: "Honda Insight", mileage_mpg: 55, type: "Hybrid" },
    { name: "Ford Fusion Hybrid", mileage_mpg: 42, type: "Hybrid" }
  ];
  
  // Pass the results array to the view
  res.render('hybridcars', { title: 'Search Results - Hybrid Cars', results: results });
});

module.exports = router;
