const express = require('express');
const router = express.Router()

router.get('/', (req, res, next) => {
  res.redirect('/xinyixue666')
})

module.exports = router;