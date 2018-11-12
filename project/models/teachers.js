var mongoose = require('mongoose');

const TeacherSchema = mongoose.Schema({
    id: Number,
    name: String,
    createDate: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Teachers', TeacherSchema)