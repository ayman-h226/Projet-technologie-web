const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const RouteProducts = require('./router/product');

mongoose.connect('mongodb+srv://Design:nis.8apdsifbY_q@expressapi.r8ncftv.mongodb.net/?retryWrites=true&w=majority',
{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Connexion success !")
}).catch((error) => {
    console.log(error);
});

app.use(bodyParser.json());
app.use('/api/products',RouteProducts);

module.exports= app;