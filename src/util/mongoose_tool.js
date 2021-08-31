module.exports = {
    multipleMongooseToObject: function (MongooseArray) {
        return MongooseArray.map((MongooseArray) => MongooseArray.toObject());
    },
    mongooseToObject: function (Mongoose) {
        return Mongoose ? Mongoose.toObject() : Mongoose;
    },
};
