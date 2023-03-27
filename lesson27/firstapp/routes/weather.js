/*
  weather.js -- Router accessing APIs
  This is a demo showing how to have an express server
  get information by accessing multiple APIs.
  In this case we use the US government weather API
  which is a free service provided to the world.
*/
const express = require('express');
const router = express.Router();
const ToDoItem = require('../models/ToDoItem')
const axios = require('axios')

router.get('/weather', (req,res,next) => {
    res.render('weather')
})

// returns a list of matches for an address
// if there is a match the latlon is in the coordinates field
const get_latlon = async (address) => {
    address = encodeURI(address);
    let url="https://geocoding.geo.census.gov/geocoder"+
              "/locations/onelineaddress"+
              "?address="+address+
              "&benchmark=2020"+
              "&format=json"
    let response = await axios.get(url)
    return response.data.result.addressMatches
}

// returns a forecast for any US location
// given by lattitude and longitude
const get_forecastURL = async (latlon) => {
  let url = "https://api.weather.gov/points/"+
              latlon.y+","+latlon.x
  const response = await axios.get(url)
  return response.data.properties.forecast
}

const get_weather = async (address) => {
  const matches = await get_latlon(address)
  if (matches.length==0) {
    return ([])
  } else {
    const url = await get_forecastURL(matches[0].coordinates)
    const response = await axios.get(url)
    return (response.data.properties.periods)
  }
}

router.post('/weather.json',
  async (req,res,next) => {
    const weather = await get_weather(req.body.address)
    res.json(weather)
  }
)

router.post('/weather',
  async (req,res,next) => {
    console.log('getting weather')
    res.locals.address = req.body.address
    res.locals.weather = await get_weather(req.body.address)
    res.render('weatherForecast')
}
)

  module.exports = router;
