const express = require('express')
// const crypto = require('crypto')

const {
    genTable,
    data
} = require('../lab_5/tools');

const {
    addComment,
    getComments,
    getCommentsByid,
    getModles,
    getModlesById,
    checkApiKey,
    addModel,
    updateModel,
    deleteModel
} = require('./controllers/commentsControl.js')

const apiVer1Router = express.Router();
const apiVer2Router = express.Router();

apiVer1Router.use((req, res, next) => {
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

apiVer1Router
    .use((req, res, next) => {
        let password = req.query['password'];
        if (password === 'secret') 
        {
            // res.statusCode = 200;
            // res.send('Access allowed!');
            // res.redirect('/API/1/about');
            next();
            // return;
        }
        res.statusCode=403;
        res.send('Forbidden!');})
    .get('/about', () => {
        req.redirect('/API/1/index.html')})
    .get('/stats',(req, res) => {
        res.send(genTable(data['user-agent-stats']));})
    .get('/', (req, res) => {
    res.send('This is my server on Express.JS\nHello Everyone!');})
    
    .post('/comments', express.json(), (req, res) => {
        let body = req.body;
        data['comments'].push(...body['comments']);
        res.send(JSON.stringify(data['comments']));
    });

apiVer2Router
    .get('/comments', getComments)
    .get('/comments/:id', getCommentsByid)
    .use(express.json())
    .post('/comments', addComment)
    .get('/models', getModles)
    .get('/models/:id', getModlesById)
    .use(express.json(), checkApiKey)
    .post('/models', addModel)
    .put('/models/:id', updateModel)
    .delete('/models/:id', deleteModel);

// возвращать API ключ по имени
// в заголовках ответа

module.exports = {
    apiVer1Router,
    apiVer2Router
};
