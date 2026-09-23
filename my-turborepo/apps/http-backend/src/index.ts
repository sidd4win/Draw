import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";
import { middleware } from "./middleware";

const app = express();

app.post('/signin', (req, res) => {
    //db-call
})
app.post('/signup', (req, res) => {
    const userId = 1;
    const token = jwt.sign({
        userId
    }, JWT_SECRET)
    res.json({
        message: "signup sucessfully",
        Token: token
    })
})
app.post('/room', middleware, (req, res) => {
    //db-call

    roomId: 123
})


app.listen(3000);