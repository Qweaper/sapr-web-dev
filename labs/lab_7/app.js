const express = require('express');
const helmet = require("helmet");
const morgan = require("morgan");

const {apiVerRouter} = require('./router.js');

const app = express();
const host = '127.0.0.1'
const port = '3000'

//Добавляем Morgan
app.use(morgan('dev'))

//Добавляем Helmet
app.use(helmet());

app.use('/API/1/', apiVerRouter);

app.use((req, res, next) => {
    console.log("Method: ", req.method);
    console.log('Route: ', req.url);
    console.log('Headers: ', req.headers);
    console.log('Query', req.query);
    console.log('Params', req.params);
    next();
});

app.use((req, res) => {
    res.status(400).send('Bad request!');
});

app.listen(port, host, () => {
    console.log(`Server is online on ${host}:${port}\nURL: http://www.localhost:${port}/API/1`);
});

