var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET home page. */
router.get('/',async (req, res, next) =>{
  let response = await axios.get('https://old.reddit.com/r/programming.json')
  let data = response.data.data.children.map(c => c.data)
  res.render('index', { title: 'Programming', data });
});

router.get('/algorithms',async (req, res, next) =>{
  let response = await axios.get('https://old.reddit.com/r/algorithms.json')
  let data = response.data.data.children.map(c => c.data)
  res.render('index', { title: 'Algorithms', data });
});

router.get('/cd',async (req, res, next) =>{
  let response = await axios.get('https://old.reddit.com/r/codinginterview.json')
  let data = response.data.data.children.map(c => c.data)
  res.render('index', { title: 'Coding Interview', data });
});

router.get('/cs',async (req, res, next) =>{
  let response = await axios.get('https://old.reddit.com/r/computerscience.json')
  let data = response.data.data.children.map(c => c.data)
  res.render('index', { title: 'Computer Science', data });
});

router.get('/csinit',async (req, res, next) =>{
  let response = await axios.get('https://old.reddit.com/r/cscareerquestions.json')
  let data = response.data.data.children.map(c => c.data)
  res.render('index', { title: 'CS Interview Question', data });
});

module.exports = router;
