require('dotenv').config();
var express = require('express');
var router = express.Router();
var ctrlLocations=require('../controller/locations');
var ctrlOthers=require('../controller/others');


/* Locations page*/
router.get('/',ctrlLocations.homelist);
router.get('/location',ctrlLocations.locationInfo);
router.get('/location1', ctrlLocations.locationInfo1);
router.get('/location2', ctrlLocations.locationInfo2);
router.get('/location/review/new',ctrlLocations.addReview);
/* others page*/
router.get('/about', ctrlOthers.about);
router.get('/signin', ctrlOthers.signin);

router.get('/register', ctrlOthers.register);

module.exports = router;

