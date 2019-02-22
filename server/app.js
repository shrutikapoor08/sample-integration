const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');

const port = process.env.port || 8000;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(webpackMiddleware(webpack(webpackConfig)));

app.use('/', (req, res) =>{
    res.sendFile('index.html', {
        root: './client'
    });
});



app.listen(port, err => {
    if(err) throw err;
    const address = `http://localhost.com:${port}`;
    console.log(`[${app.settings.env.toUpperCase()}] Listening on ${address}`)
});

