var express = require('express');
var router = express.Router();

// Route to handle the grid page
router.get('/', function(req, res, next) {
  const { rows, cols } = req.query;  // Get query parameters
  res.render('grid', { title: 'Grid Display', query: { rows, cols } });
});

module.exports = router;
