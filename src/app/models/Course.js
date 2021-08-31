const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*** Course: is a model*/
const Course = new Schema({
    name: { type: String },
    description: { type: String },
    thumbnail: { type: String },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

/** Mongoose.model will access to --> courses model */
module.exports = mongoose.model("Courses", Course);
