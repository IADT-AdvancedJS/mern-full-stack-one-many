const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const Lecturer = require('./models/Lecturer');
const Module = require('./models/Module');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const mongo_uri = 'mongodb://localhost/lecturer-modules';
mongoose.connect(mongo_uri, { useNewUrlParser: true }, function(err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/api/lecturers', function(req, res) {
  Lecturer.find({}, function(err, data) {
    if (err) throw err;

    res.send(data);
  });
});

app.get('/api/modules', function(req, res) {
  Module.find({}, function(err, data) {
    if (err) throw err;

    res.send(data);
  });
});

app.get('/api/lecturers/:id', function(req, res) {
  Lecturer.findOne({_id: req.params.id}, function(err, data) {
    if (err) throw err;

    res.send(data);
  });
});

app.get('/api/lecturers/:id/modules', function(req, res) {
  Lecturer.findOne({_id: req.params.id}, function(err, data) {
    if (err) throw err;

    Module.find({lecturer_id: data._id}, function(err, modules) {
      if (err) throw err;

      res.send(modules);
    });
  });
});


app.listen(process.env.PORT || 8080);
