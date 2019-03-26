const mongoose = require('mongoose');

const LecturerSchema = mongoose.Schema({
  name: String,
  email: String,
  office: String
});

module.exports = mongoose.model('Lecturer', LecturerSchema);
