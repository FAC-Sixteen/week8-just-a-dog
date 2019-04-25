const express = require('express');
const path = require('path');
const router = express.Router();

const getData = require("./../model/queries/getData");
const postData = require('../model/queries/postData');

router.get('/', (req, res) => {
    res.render('home')
})

router.post('/submit', (req, res) => {
    console.log(req.body);
    postData(req.body.name, req.body.date, req.body.description, req.body.keyword);
    res.redirect(`/${req.body.name}`)
})

router.get('/:user', (req, response) => {
  const username = req.url.split("/")[1];
    // response.render('user')
    getData(username, (err, res) => {
      if (err) console.log(err);
      console.log(res.rows);
      // response.end(res.rows);
      response.render('user', { dreams: res.rows })
    })
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
