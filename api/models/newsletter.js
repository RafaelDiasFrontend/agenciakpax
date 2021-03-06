const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsletterSchema = new Schema({
    email: { type: String, unique: true, required: true }
});

module.exports = mongoose.model("Newsletter", NewsletterSchema);