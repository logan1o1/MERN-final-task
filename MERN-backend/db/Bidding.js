const mongoose = require('mongoose')

const biddingSchema = new mongoose.Schema({
    userName: String,
    userId: String,
    itemId: String,
    bid: String,
})

module.exports = mongoose.model("bidding", biddingSchema)