const mongoose = require('mongoose');
const Lecturer = require('./models/Lecturer');
const Module = require('./models/Module');

const mongo_uri = 'mongodb://localhost/lecturer-modules';
mongoose.connect(mongo_uri, { useNewUrlParser: true }, function(err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});

Lecturer.findOne({name: 'Eoghan Yudkin'}, function(err, lecturer) {
  if (err) throw err;

  let arr = [
    {name: 'Maths 101',
      credits: 10,
      weeks: 15,
      lecturer_id : lecturer._id},
    {name: 'Maths 202',
      credits: 10,
      weeks: 15,
      lecturer_id : lecturer._id},
    {name: 'Stats all folks',
      credits: 10,
      weeks: 15,
      lecturer_id : lecturer._id}
  ];
  Module.create(arr, function(err, res) {
    if(err) throw err;

    console.log(res);
  });
});
