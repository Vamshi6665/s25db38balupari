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
//var express = require('express');
const hybridcars_controllers= require('../controllers/hybridcars');
var router = express.Router();
/* GET costumes */
router.get('/', hybridcars_controllers.hybridcars_view_all_Page );
/* GET detail costume page */
router.get('/detail', hybridcars_controllers.hybridcars_view_one_Page);

// GET request for one costume.
router.get('/hybridcars/:id', hybridcars_controllers.hybridcars_detail);
router.get('/hybridcars/:id', hybridcars_controllers.hybridcars_update_put);
module.exports = router;


module.exports = router;
