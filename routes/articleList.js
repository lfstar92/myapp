var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    linkList: [{
      href: '/',
      name: "首页",
      active: false
    }, {
      href: '/article',
      name: "文章",
      active: false
    }, {
      href: '/list',
      name: "列表",
      active: true
    }, {
      href: '/about',
      name: "关于",
      active: false
    }]
  });
});

module.exports = router;
