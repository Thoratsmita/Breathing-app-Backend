const express = require('express');
const sleepTrackRoute = express.Router()

const sleepController=require('../controllers/sleepController');
const authController = require("../controllers/authController");
const { title } = require('process');


//GET  /api/sleep/allSleepTracks --fetching all tracks of sleep
sleepTrackRoute.get('/allSleepTracks', sleepController.allSleepTracks);

//GET  /api/meditation//getSleepTrack/:track_id --fetching all tracks of meditation
sleepTrackRoute.get('/getSleepTrack/:track_id', sleepController.getSleepTrack)

// sleepStories--



// userspecific--
sleepTrackRoute.post('/addSleepFavorite', authController.protect, sleepController.addSleepFavorite);

module.exports = sleepTrackRoute;