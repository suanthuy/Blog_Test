const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const Schema = mongoose.Schema;

/**
 ** Course: is a model
 ** required --> must have
 */
const Course = new Schema(
    {
        name: { type: String, maxlength: 255, required: true },
        description: { type: String, maxlength: 500 },
        thumbnail: { type: String },
        videoid: { type: String, required: true },
        slug: { type: String, slug: "name", unique: true },
        // createAt: { type: Date, default: Date.now },
        // updateAt: { type: Date, default: Date.now },
    },
    {
        timestamps: true,
    }
);

/** Mongoose.model will access to --> courses model */
module.exports = mongoose.model("course", Course);
