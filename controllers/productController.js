const Product = require('../models/product.js');

module.exports = {
    create: function(req, res) {
        Product.create({
            Name: req.body.Name,
            Price: req.body.Price,
            Stock: req.body.Stock,
            Image: req.body.Image
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
        Product.find({}).select(["name","price","stock","imageUrl"])
            .then(data => {
                res.status(200).json({
                    success: true,
                    message: "I found it for you!",
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
        Product.findOneAndUpdate(req.params._id, req.body)
            .then(data => {
                res.status(200).json({
                    success: true,
                    message: "Updated!",
                    data: data,
                })
            })
            .catch(err => {
                res.status(422).json({
                    success: false,
                    message: "Failed to update. Please, try again.",
                    errors: err
                })
            })
    },
    delete: function(req, res){
        Product.findByIdAndDelete(req.params._id)
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