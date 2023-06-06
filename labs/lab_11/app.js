const express = require('express');
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require('cors')

const {apiVer1Router, apiVer2Router} = require('./RouterAPI.js');
const { errorCatcher } = require('./controllers/commentsControl.js');


const app = express();
const host = '127.0.0.1'
const port = '3000'

app.use(cors());
//Добавляем Morgan
app.use(morgan('dev'))

//Добавляем Helmet
// app.use(helmet());
// app.disable('x-powered-by');


app.use(express.static('./public'));
app.use('/API/1/', apiVer1Router);
app.use('/API/2/', apiVer2Router);

app.use((req, res, next) => {
    console.log("Method: ", req.method);
    console.log('Route: ', req.url);
    console.log('Headers: ', req.headers);
    console.log('Query', req.query);
    console.log('Params', req.params);
    next();
});

app.use(errorCatcher)
    .use((req, res) => {
    res.status(400).send('Bad request!');
    })
    

app.listen(port, host, () => {
    console.log(`Server is online on ${host}:${port}\nURL: http://www.localhost:${port}/API/1\nor\nURL: http://www.localhost:${port}/API/2`);
});

