var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test', { title: 'Express' });
});

/* GET home page. */
router.post('/', function(req, res) {
    console.log(req.body);
    console.log('www.app=test.js переход');
    res.send('www.app=test.js переход');
  });
  

module.exports = router;