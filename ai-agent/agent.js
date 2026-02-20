const express = require('express');
const app = express();

app.get('/ai', (req,res)=>{
    res.json({ message: "AI Agent running inside Docker" });
});

app.listen(6000, ()=> console.log("AI Agent running on 6000"));