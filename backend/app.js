//MONDODB PASS: yLM22nyFM6MiAaHM
//MONGODB CONNECTION: mongodb+srv://Annalis_Kirwa:<password>@cluster0-sftiy.mongodb.net/test?retryWrites=true&w=majority

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://Annalis_Kirwa:yLM22nyFM6MiAaHM@cluster0-sftiy.mongodb.net/test?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  
  app.use(bodyParser.json());

  app.post((req, res, next) => {
   console.log(req.body);
   res.status(201).json({
       message: 'The thing has been created succesfully'
   });
  });

app.use((req, res, next ) => {
    const stuff = [
        {
            _id: 'gvfthhvgb',
            title: 'My first thing',
            description: 'All the information about my first thing',
            imageUrl: 'data:image/jpeg;base64,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',
            price: 4500,
            userId: 'fdvfhdgdjcbhj', 
        },
        {
            _id: 'gvfthhvgbgbhj',
            title: 'My probably second thing',
            description: 'All the information about my seconfd  thing',
            imageUrl: 'data:image/jpeg;base64,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',
            price: 5900,
            userId: 'fdvfhdgdjcbhjcbh', 
        },
    ];
    res.status(200).json(stuff)
});

module.exports = app;