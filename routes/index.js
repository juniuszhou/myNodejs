var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// set static html page
router.get('/dsOne', function(req, res, next) {
    res.sendfile('./d3Pages/stackedGrouped.html');
});

// set static html page
router.get('/static', function(req, res, next) {
    res.sendfile('./htmls/index.html');
});

module.exports = router;
