const { json } = require('express');
const http = require('http');

// переместить nodemon в dev-dep
// удалить http пакет 

let host = '127.0.0.1';
let port = 3000;

const {genTable, data} = require('./tools')

let server = http.createServer(function (request, response) {
    console.log("Method: ", request.method);
    console.log('Route: ', request.url);
    console.log('Headers: ', request.headers);
    if (request.method == "GET") {
        if (request.url == '/')
        {
            response.write('This is my server.\nHello Everyone!');
            response.end();
        }
        else if (request.url == "/stats")
        {   
            let headers = request.headers;
            // добавить статистику через просмотр заголовков V 
            if (headers.hasOwnProperty('user-agent')) {
                response.setHeader('Content-Type', 'text/html');
                let user_agent_data = headers['user-agent'];
                if (!data['user-agent-stats'].hasOwnProperty(user_agent_data)){
                    data['user-agent-stats'][user_agent_data] = 0;
                }
                data['user-agent-stats'][user_agent_data] += 1;
                response.write(genTable(data['user-agent-stats']));
                response.end();
            }
            else {
                response.statusCode = 400;
                response.statusMessage = "Bad request!";
                response.end();
            }
            
        }
        else{
            response.statusCode = 400;
            response.statusMessage = "Bad request!";
            response.end();
        }
    }
    else if (request.method == "POST"){
        if(request.url == '/comments'){
            // переделать подсчёт комментариев через просмотр data в request
            let body = '';
            request.on('data', (chunk) => {
            body += chunk})
            response.setHeader("Content-Type", "application/json")
            request.on("end", ()=>{
            data['comments'].push(body);
            console.log(data.comments);
            response.write(JSON.stringify(data['comments']));
            response.end();
            })

            }
            else {
                response.statusCode = 400;
                response.statusMessage = "Bad request!";
                response.write('No content');
                response.end();
            }
        }
    else{
        response.statusCode = 400;
        response.statusMessage = "Bad request!";
        response.end();
        }
    if (request.url != '/favicon.ico'){
        data['user-agent-agent'] += 1;
    }
}).listen(port, host, function () {
    
    console.log(`Сервер начал прослушивание запросов по адресу ${host} на ${port} порту `);
})

// прослушивать запрос на подключения
server.on('connection', (param, param1) => {
    console.log('new connection opened');
})

