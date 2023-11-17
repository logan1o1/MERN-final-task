const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: String,
    image: String,
    seller: String,
    desc: String,
    minBid: String,
    userId: String,
})

module.exports = mongoose.model("items", itemSchema)