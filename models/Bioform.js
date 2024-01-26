const mongoose = require('mongoose')

const BioformSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const BioformModel = mongoose.model("bioform" , BioformSchema)
module.exports = BioformModel