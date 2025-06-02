const express = require('express');
const router = express.Router();
const knockoutsController = require('../Controllers/KnockoutsController');

// Route to get all matches
router.get('/', knockoutsController.getAllMatches);
router.get('/knockoutsA', knockoutsController.getAllMatchesA);
router.get('/matchdetails', knockoutsController.matchdetails);

module.exports = router;
