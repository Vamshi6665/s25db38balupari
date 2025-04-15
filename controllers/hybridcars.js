var hybridcars = require('../models/hybridcars');
// List of all Costumes
//exports.hybridcars_list = function(req, res) {
//res.send('NOT IMPLEMENTED: hybridcars list');
//};
exports.hybridcars_list = async function (req, res) {
    try {
        thehybridcars = await hybridcars.find();
        res.send(thehybridcars);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Costume.
// exports.hybridcars_detail = function (req, res) {
//     res.send('NOT IMPLEMENTED: hybridcars detail: ' + req.params.id);
// };
// Handle Costume create on POST.
//exports.hybridcars_create_post = function(req, res) {
//res.send('NOT IMPLEMENTED: hybridcars create POST');
//};
//Handle Costume create on POST.
exports.hybridcars_create_post = async function (req, res) {
    console.log(req.body)
    let document = new hybridcars();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.mileage_mpg = req.body.mileage_mpg;
    document.type = req.body.type;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Costume update form on PUT.
exports.hybridcars_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await hybridcars.findById(req.params.id)
        // Do updates of properties
        if (req.body.name)
            toUpdate.name = req.body.name;
        if (req.body.mileage_mpg) toUpdate.mileage_mpg = req.body.mileage_mpg;
        if (req.body.type) toUpdate.type = req.body.type;
        // if (req.body.checkboxsale) toUpdate.sale = true;
        // else toUpdate.same = false;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};

// for a specific Costume.
exports.hybridcars_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await hybridcars.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle Costume delete on DELETE.

 exports.hybridcars_delete = async function(req, res) {
 console.log("delete " + req.params.id)
 try {
 result = await hybridcars.findByIdAndDelete( req.params.id)
 console.log("Removed " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": Error deleting ${err}}`);
}
};

// Handle a show one view with id specified by query
exports.hybridcars_view_one_Page = async function(req, res) {
console.log("single view for id " + req.query.id)
try{
result = await hybridcars.findById( req.query.id)
res.render('hybridcarsdetail',
{ title: 'hybridcars Detail', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.hybridcars_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('hybridcarscreate', { title: 'hybridcars Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    

    // Handle building the view for updating a costume.
    // query provides the id
    exports.hybridcars_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await hybridcars.findById(req.query.id)
    res.render('hybridcarsupdate', { title: 'hybridcars Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle a delete one view with id from query
 exports.hybridcars_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await hybridcars.findById(req.query.id)
    res.render('hybridcarsdelete', { title: 'hybridcars Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };


// Handle Costume delete from on DELETE.
//exports.hybridcars_delete = function (req, res) {
//    res.send('NOT IMPLEMENTED: hybridcars delete DELETE ' + req.params.id);
//};
// Handle Costume update form on PUT.
// exports.hybridcars_update_put = function (req, res) {
//     res.send('NOT IMPLEMENTED: hybridcars update PUT' + req.params.id);
// };
// VIEWS
// Handle a show all view
exports.hybridcars_view_all_Page = async function (req, res) {
    try {
        thehybridcars = await hybridcars.find();
        res.render('hybridcars', { title: 'hybridcars Search Results', results: thehybridcars });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};