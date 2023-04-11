const mongoose = require('mongoose');
//mongoose.connect("mongodb://127.0.0.1:27017/dehashedDb");
mongoose.connect('mongodb://127.0.0.1:27017/dehashedDb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000 // 30 second timeout
});