const express = require('express')
const {
    genTable,
    data
} = require('../lab_5/tools');
const apiVerRouter = express.Router();

apiVerRouter.use(express.static('./public'));

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

// параметры            -- /home/user/:id <=> /home/user/8     => req.params; >>> {...}
// строка аргументов    -- /home/user     <=> /home/user?id=8  => req.query;  >>> {...}
apiVerRouter.use((req, res, next) => { // переписать на аргументы строки V 
    let password = req.query['password'];
    if (password === 'secret') 
    {
        next();
    } else {
        res.statusCode=403;
        res.send('Forbidden!');
    }    
});

apiVerRouter.get('/about', (req, res) => {
    res.redirect('/API/1/index.html')
})

apiVerRouter.get('/stats',(req, res) => {
        res.send(genTable(data['user-agent-stats']));
});

apiVerRouter.use('/comments', express.json(), (req, res) => {
    let body = req.body;
    if (body['comments'] === undefined || body['username'] === undefined)
    {
        res.status(400).send('Bad request!')
    }
    else 
    {
        data['comments'].push(...body['comments']);
        res.send(JSON.stringify(data['comments']));
    }
});
// проверка на наличие неправильных данных в json

apiVerRouter.get('/', (req, res) => {
    res.send('This is my server on Express.JS\nHello Everyone!');
});

module.exports = {
    apiVerRouter
};