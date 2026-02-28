const express = require('express');
const dotenv = require('dotenv').config();

// we can access the environment variables using process.env.VARIABLE_NAME
const port = process.env.PORT || 5000;

const app = express();
// we need to use express.json() middleware to parse the JSON data from the request body
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/goals',require('./routes/goalsRoute'));
app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
});

