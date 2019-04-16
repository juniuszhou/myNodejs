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
    res.sendfile('./htmls/divParallel.html');
});

// set static html page
router.get('/script', function(req, res, next) {
    res.render('simpleSVG', {title: 'show how to embed script'})
});

module.exports = router;
