const mongoose = require('mongoose')

const biddingSchema = new mongoose.Schema({
    name: String,
    userId: String,
    itemId: String,
    bid: Number,
})

module.exports = mongoose.model("bidding", biddingSchema)