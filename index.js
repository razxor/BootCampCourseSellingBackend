const express = require('express');
const cors = require('cors');
const app = express()

const port = process.env.port || 3000

app.use(cors());

//   end initial setup

const courses = require('./courses.json');

app.get('/', (req, res) => {
    res.send('Welcome to my site');
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});

