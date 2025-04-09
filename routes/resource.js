var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var hybridcars_controller = require('../controllers/hybridcars');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// hybridcars ROUTES ///
// POST request for creating a Costume.
router.post('/hybridcars', hybridcars_controller.hybridcars_create_post);
// DELETE request to delete Costume.
router.delete('/hybridcars/:id', hybridcars_controller.hybridcars_delete);
// PUT request to update Costume.
router.put('/hybridcars/:id', hybridcars_controller.hybridcars_update_put);
// GET request for one Costume.
router.get('/hybridcars/:id', hybridcars_controller.hybridcars_detail);
// GET request for list of all Costume items.
router.get('/hybridcars', hybridcars_controller.hybridcars_list);

module.exports = router;

