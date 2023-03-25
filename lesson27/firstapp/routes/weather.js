/*
  weather.js -- Router accessing APIs
*/
const express = require('express');
const router = express.Router();
const ToDoItem = require('../models/ToDoItem')
const axios = require('axios')

router.get('/weather', (req,res,next) => {
    res.render('weather')
})

router.post('/weather',
  async (req,res,next) => {
    res.json(req.body)
  }

  )

