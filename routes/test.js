var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test', { title: 'Express' });
});

/* GET home page. */
router.post('/', function(req, res) {
    console.log(req.body);
    console.log('передаем тестовую строку');
    res.send(JSON.stringify('это тестовая строка на 6000'));
  });
  

module.exports = router;