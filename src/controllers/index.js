const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home')
})

router.post('/submit', (req, res) => {
    console.log(req.body)
})

router.get('/:user', (req, res) => {
    res.render('user')
})

router.use((req, res) => {
    res
    .status(404)
    .sendFile(path.join(__dirname, '..', '..', 'public', 'html', '404.html'))
})

router.use((err, req, res) => {
    console.log(err.message)
    res
    .status(500)
    .sendFile(path.join(__dirname, '..', '..', 'public', 'html', '500.html'))
})

module.exports = router;