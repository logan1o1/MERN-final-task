const express = require('express')
const cors = require('cors')
require('./db/config')
const mongoose = require('mongoose')
const User = require('./db/Users')
const Item = require('./db/Items')

const app = express()
app.use(cors())
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



app.listen(4000)