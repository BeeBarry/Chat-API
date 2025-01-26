const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");

let messages = [];
let currentId = 1;

app.use(express.json());


app.get("/api/messages", (req,res) => {
    console.log("getting all the messages");
    res.json(messages);
})

app.post("/api/message", (req, res) => {
    const { text } = req.body;
    
    if(!text){
        return res.status(400);
    }
    
    const newMessage = {
        id: currentId++,
        text,
        createdAt: new Date()
    };
    
    messages.push(newMessage);
    res.status(200).json(newMessage);
})

app.listen(PORT, () => {
    console.log("listening to 3000");
    });