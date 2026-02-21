const client = require('prom-client');
client.collectDefaultMetrics();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB Connected"))
.catch(err=> console.log(err));

const User = mongoose.model("User", { name: String });

app.post("/add", async (req,res)=>{
    const user = new User({ name: req.body.name });
    await user.save();
    res.json({ message: "User added" });
});

app.get("/users", async (req,res)=>{
    const users = await User.find();
    res.json(users);
});
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(5000, ()=> console.log("Backend running on 5000"));