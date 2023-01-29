const Product = require('../models/product');


exports.createProduct = (req, res) =>{
    const prod = new Product(req.body);
    prod.save()
    .then((product) => {
        return res.status(201).json({product})
    }).catch((error) => {return res.status(400).json({error})})
}

exports.getOneProduct = (req, res) => {
    const id = req.params.id;
    Product.findOne({id: id})
    .then((product) =>{
        return res.status(200).json({product})
    }).catch((error) => { 
        return res.status(400).json({error})
    })
}

exports.getAllProduct = (req, res) =>{
    Product.find()
    .then((products) => {
        return res.status(200).json({products})
    }).catch((error) => {
        return res.status(400).json({error})
    })
}

exports.updateProduct =(req, res) =>{
    const id = req.params.id;
    Product.findByIdAndUpdate({name: 'orange',description: 'good', price: 14})
    .then((products) => {
        return res.status(200).json({products})
    }).catch((error) => {
        return res.status(400).json({error})
    })

}

exports.deleteOneProduct = (req, res) =>{
    const id = req.params.id;
    Product.deleteOne({id: id})
    .then((products) => {
        return res.status(200).json({products})
    }).catch((error) => {
        return res.status(400).json({error})
    })
}