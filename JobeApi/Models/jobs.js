const mongoose = require('mongoose');
const validator = require('validator');
const jobsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter Job title'],
        trim: true,
        maxlength: [100, 'Job title cannot exceed 100 charaters']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please enter Job description'],
        maxlength: [1000, 'Job description cannoot exceed 1000 characters']
    },
    email: {
        type: String,
        validate: [validator.isEmail, 'please add a valid email address']
    },
    address: {
        type: String,
        required: [true, 'please add an address']
    },
    company: {
        type: String,
        required: [true, 'please add the company name']
    },
    industry: {
        type: [String],
        required: true,
        enum: {
            values: ['business,Information Techology', 'Tele Communication', 'Banking', 'Others'],
            message: 'please select correct option for indumstries'
        }
    },
    jobType: {
        type: String,
        required: true,
        enum: {
            values: [
                'Permanent', 'Temporary', 'InternShip'
            ],
            message: 'Please select corrrect option for Education'
        }
    },
    position: {
        type: Number,
        default: 1
    },
    experiance: {
        type: String,
        default: true,
        enum: {
            values: [
                'No Experiance',
                '1 year-2 Years',
                '2 year-5 Years',
                '5 years+'
            ]
        }
    },
    salary: {
        type: Number,
        required: [true, 'Please enter expected salary for this jobs']
    },
    postingDate: {
        type: Date,
        default: Date.now
    },
    lastDate: {
        type: Date,
        default: new Date().setDate(new Date().getDate + 7)
    },
    applicantsApplied: {
        type: [Object],
        select: false
    }
});

module.exports = mongoose.model('Job', jobsSchema);