const express = require('express');
const router = express.Router();
const jobsController = require('../controllers/jobsController');
/*
router.get('/jobs', (req, res) => {
    jobsController.getJobs(req, res, null);
})
*/
router.route('/jobs').get(jobsController.getJobs);
router.route('/jobs').post(jobsController.newJobs);
module.exports = router;