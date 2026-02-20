const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req,res)=>{
    res.send(`
        <form method="POST" action="/add">
            <input name="name"/>
            <button>Add</button>
        </form>
    `);
});

app.post('/add', async (req,res)=>{
    await axios.post('http://backend:5000/add', {
        name: req.body.name
    });
    res.redirect('/');
});

app.listen(3000, ()=> console.log("Frontend running on 3000"));