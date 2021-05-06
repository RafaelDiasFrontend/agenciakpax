const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({   
    companyName: String,
    title: String,
    category: String,
    slug: { type: String, unique: true },
    description: String,
    link: String,
    photo: String,
    shortDescription: String,  
});

module.exports = mongoose.model("Portfolio", portfolioSchema);