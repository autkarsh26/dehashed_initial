const mongoose = require('mongoose');
const leaksSchema = mongoose.Schema({},
    {
        strict: false
    });
module.exports = mongoose.model("leaks", leaksSchema);