const Job = require('../Models/jobs');

// Get all jobs =
exports.getJobs = (req, res, next) => {

    res.status(200)
        .json({
            success: true,
            message: 'this route will display all the routes in future'
        })

}

// creating a action method i.e will be used by the 
// route /apoi/v1/job/new
// i.e means for creating an new resource


exports.newJobs = (req, res, next) => {

    console.log(req.body)
    var newJob = new Job(req.body);
    newJob.save((err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('saved successfully')
        }
    });

    res.status(200)
        .json({
            success: true,
            message: 'Job Created',
            data: newJob
        });


}