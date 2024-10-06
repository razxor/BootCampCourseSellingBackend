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

app.get('/api/courses', (req, res) => {
    res.send(courses);
})

app.get('/api/courses/:id', (req, res) => {
    let id = req.params.id    
    let data = courses.find((item)=>{
        return item.course_id == id
    })    
    res.send(data);
})

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});

