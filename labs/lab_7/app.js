const express = require('express');
const helmet = require("helmet");
const morgan = require("morgan");

const {apiVerRouter} = require('./router.js');
const {
    genTable,
    data
} = require('../lab_5/tools');

const app = express();
const host = '127.0.0.1'
const port = '3000'

//Добавляем Morgan
app.use(morgan('dev'))


//Добавляем Helmet
app.use(helmet());
app.disable('x-powered-by');

app.use('/API/1/', apiVerRouter);

apiVerRouter.get('/login/:password', (req, res, next) => {
    let password = req.params['password'];
    if (password === 'secret') 
    {
        res.statusCode = 200;
        res.write('Access allowed!');
        // res.redirect('/API/1/about');
        // next();

    }
    else 
    {
        res.statusCode=403;
        res.write('Forbidden!')
    }
    res.send()

});

app.use((req, res, next) => {
    console.log("Method: ", req.method);
    console.log('Route: ', req.url);
    console.log('Headers: ', req.headers);
    console.log('Query', req.query);
    console.log('Params', req.params);
    next();
});

apiVerRouter.use((req, res, next) => {
    let headers = req.headers;
    if (headers.hasOwnProperty('user-agent')) {
        let user_agent_data = headers['user-agent'];
        if (!data['user-agent-stats'].hasOwnProperty(user_agent_data)){
            data['user-agent-stats'][user_agent_data] = 0;
        }
        data['user-agent-stats'][user_agent_data] += 1;
    }
    next();
});

apiVerRouter.use(express.static('./public'));

apiVerRouter.get('/about', () => {
    req.redirect('/API/1/index.html')
})

// можно делать через handlebars - шаблонизатор
apiVerRouter.get('/stats',(req, res) => {
        res.send(genTable(data['user-agent-stats']));
});

apiVerRouter.post('/comments', express.json(), (req, res) => {
    let body = req.body;
    data['comments'].push(...body['comments']);
    res.send(JSON.stringify(data['comments']));
});

apiVerRouter.get('/', (req, res) => {
    res.send('This is my server on Express.JS\nHello Everyone!');
});

app.use((req, res) => {
    res.status(400).send('Bad request!');
});

apiVerRouter.use((req, res) => {
    res.status(400).send('Bad request!');
});

app.listen(port, host, () => {
    console.log(`Server is online on ${host}:${port}\nURL: http://www.localhost:${port}/API/1`);
});
