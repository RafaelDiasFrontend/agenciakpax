const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
   user: { type: Schema.Types.ObjectId, ref: "User" },  
   city: String,
   state: String,
   fullName: String,
   streetAddress: String,  
   city: String,
   zipCode: Number,
   phoneNumber: String,
   deliveryInstructions: String,
   securityCode: String  
 
});

module.exports = mongoose.model("Address", AddressSchema);