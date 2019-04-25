const express= require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home')
})
router.get('/:user', (req, res) => {
    res.render('user')
})


module.exports = router;