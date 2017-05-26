const express = require('express');
const router = express.Router();

const schedulerController = require('../controllers/schedulerTweet');
const searchTweet = require('../controllers/searchTweet');
const lebaranTweet = require('../controllers/lebaranTweet');
const getWaktuSalat = require('../controllers/getWaktuSalat');
const auth = require('../controllers/auth');

// Test cron
router.get('/', schedulerController.allCity);

router.get('/test', (req,res) => {
  res.render('index', { coba: false });
});

router.post('/test', getWaktuSalat.reply);

// Search and reply tweet
router.get('/reply', searchTweet.execute);

// Lebaran tweet
router.get('/sudahlebaran', lebaranTweet.create);

// Credentials
router.post('/signin', auth.adminLogin);

module.exports = router;
