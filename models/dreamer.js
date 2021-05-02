const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const dreamerSchema = new Schema({
    name: {type: String, required: true},
    occupation: {type: String, required: true},
    countryOfOrigin: {type: String, required: true},
    languages: {type: String, required: true},
    aboutMe: {type: String, required: true},
    personalLink: String
}, {
    timestamps: true
});

module.exports = mongoose.model("Dreamer", dreamerSchema)