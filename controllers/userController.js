const User = require('../models/user.js');

module.exports = {
    create: function(req, res) {
        User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthYear: req.body.birthYear,
            Email: req.body.Email
        })
        .then(data => {
            res.status(201).json({
                success: true,
                message: "New data has been created!",
                data: data,
            })
        })
        .catch(err => {
            res.status(400).json({
                success: false,
                message: "Cannot create data, there's something wrong.",
                errors: err
            })
        })

    },
    index: function(req, res){
        User.find({}).select(["firstName","lastName","birthYear","Email"])
            .then(data => {
                res.status(200).json({
                    success: true,
                    message: "This is all of your data",
                    data: data,
                })
            })
            .catch(err => {
                res.status(404).json({
                    success: false,
                    message: "Hmm, i not found anything here.",
                    errors: err
                })
            })
    },
    update: function(req, res){
        User.findByIdAndUpdate(req.params._id, req.body)
            .then(data => {
                res.status(200).json({
                    success: true,
                    message: "Data has been updated!",
                    data: data,
                })
            })
            .catch(err => {
                res.status(422).json({
                    success: false,
                    message: "Update failed.",
                    errors: err
                })
            })
    },
    delete: function(req, res){
        User.findByIdAndDelete(req.params._id)
            .then(data => {
                res.status(200).json({
                    success:true,
                    data: "Successfully delete data!"
                })
            })
            .catch(err => {
                res.status(422).json({
                    success: false,
                    errors: "Failed to delete data"
                })
            })
    }
}