const express = require('express');
const dotenv = require('dotenv').config();

// we can access the environment variables using process.env.VARIABLE_NAME
const port = process.env.PORT || 5000;

const app = express();

app.use('/api/goals',require('./routes/goalsRoute'));
app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
});

