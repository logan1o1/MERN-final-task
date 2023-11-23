const express = require('express')
const cors = require('cors')
require('./db/config')
const mongoose = require('mongoose')
const User = require('./db/Users')
const Item = require('./db/Items')
const Bidd = require('./db/Bidding')

const app = express()
const corsOption = {
    origin: ['https://mern-final-task-auction.vercel.app/', 'http://localhost:5173'],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(cors(corsOption))
app.use(express.json());

app.post("/signup", async (req, resp) => {
    const user = new User(req.body)
    let result = await user.save();
    result = result.toObject();
    delete result.password
    resp.send(result);
})

app.post("/login", async (req, resp) => {
    if (req.body.email && req.body.password) {
        let user = await User.findOne(req.body).select("-password")
        if (user) {
            resp.send(user)
        } else {
            resp.send({ result: "user not found" })
        }
    } else {
        resp.send({ result: "user not found" })
    }
})

app.post("/add", async (req, resp) => {
    const item = new Item(req.body);
    const result = await item.save();
    resp.send(result);
})

app.get("/items", async (req, resp) => {
    const items = await Item.find();
    if (items.length > 0) {
        resp.send(items)
    } else {
        resp.send({ result: "no item available" })
    }
})

app.get("/item/:id", async (req, resp) => {
    const result = await Item.findOne({ _id: req.params.id })
    if (result) {
        resp.send(result)
    } else {
        resp.send({ result: "Item not found" })
    }
})

app.post("/bidd", async (req, resp) => {
    let bid = new Bidd(req.body);
    let initialBid = await bid.save();
    resp.send(initialBid);
})

app.put("/bidd/:id", async (req,resp) => {
    let result = await Bidd.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )
    resp.send(result)
})


app.listen(4000)