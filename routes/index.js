const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// 连接MongoDB数据库
mongoose.connect('mongodb://localhost:27017/myBlog', { useNewUrlParser: true }, err => {
  if (err) {
    console.log('连接失败')
  } else {
    console.log('连接成功')
  }
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log("连接成功")
});
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'index',
    showIndexList: true
  });
});

router.get('/tagList', (req, res, next) => {
  res.render('index', {
    title: "tagList",
    showTagList: true
  })
});

router.get('/postList', (req, res, next) => {
  res.render('index', {
    title: "postList",
    showPostList: true
  })
});

router.get('/entryList', (req, res, next) => {
  res.render('index', {
    title: "entryList",
    showEntryList: true
  })
});

router.get("/article", (req, res, next) => {
  res.render('index', {
    title: 'article',
    showArticle: true
  })
})

module.exports = router;
