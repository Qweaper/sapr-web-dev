const express = require('express');
const {
    genTable,
    data
} = require('../lab_5/tools');
const app = express();

const host = '127.0.0.1'
const port = '3000'
const apiVerRouter = express.Router();

app.use('/API/2', apiVerRouter);

app.use((req, res, next) => 
{
    data['user-agent-stats'] += 1;
    next();
})
app.use((req, res, next) => 
{
    console.log("Method: ", req.method);
    console.log('Route: ', req.url);
    console.log('Headers: ', req.headers);
    next();
})

apiVerRouter.use(express.static('./public'));

apiVerRouter.get('/about', () => {
    req.redirect('/API/2/index.html')
})

apiVerRouter.get('/stats', (req, res) => 
{
    let headers = req.headers;
    if (headers.hasOwnProperty('user-agent')) {
        res.setHeader('Content-Type', 'text/html');
        let user_agent_data = headers['user-agent'];
        if (!data['user-agent-stats'].hasOwnProperty(user_agent_data)){
            data['user-agent-stats'][user_agent_data] = 0;
        }
        data['user-agent-stats'][user_agent_data] += 1;
        res.send(genTable(data['user-agent-stats']));
}});

apiVerRouter.post('/comments', (req, res) => {
    let body = '';
    req.on('data', (chunk) => {
    body += chunk})
    res.setHeader("Content-Type", "application/json")
    req.on("end", ()=>{
    data['comments'].push(body);
    console.log(data.comments);
    res.write(JSON.stringify(data['comments']));
    res.end();
    })
});

apiVerRouter.get('/', (req, res) => 
{
    res.send('This is my server on Express.JS\nHello Everyone!');
});

app.get('/*', (req, res) => 
{
    res.status(400).send('Bad request!');
});

apiVerRouter.get('/*', (req, res) => 
{
    res.status(400).send('Bad request!');
});

app.listen(port, host, () => 
{
    console.log(`Server is online on ${host}:${port}`);
});

