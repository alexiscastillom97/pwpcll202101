var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', author: 'Alexis Castillo M', appName: 'WebApp' });
});
//Agragando nueva ruta
router.get('/greeting', function(req, res, next) {
    res.send('Hola Alexis Castillo')
})


module.exports = router;