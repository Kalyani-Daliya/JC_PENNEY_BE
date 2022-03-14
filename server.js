const express = require('express');
const app  = express();
const dotenv = require('dotenv');

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

dotenv.config({path: './.env'})

//  route
const movie = require('./routes/movieRoute');

app.use('/api/v1', movie);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
})
