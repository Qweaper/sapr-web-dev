const { json } = require('express');
const http = require('http');



let host = '127.0.0.1';
let port = 3000;
let data = {'comments': [], 'user-agent': 0}

http.createServer(function (request, response) {
    console.log("Method: ", request.method);
    console.log('Route: ', request.url);
    console.log('Headers: "', request.headers);
    if (request.method == "GET") {
        if (request.url == '/')
        {
            response.write('This is my server.\nHello Everyone!');
        }
        else if (request.url == "/stats")
        {
            response.write(
                            `<table>
                                <tr>
                                    <td>user-agent</td>
                                    <td>${data['user-agent']}</td>
                                </tr>
                            </table>`
                            );
        }
        else{
            response.statusCode = 400;
            response.statusMessage = "Bad request!";
        }
    }
    else if (request.method == "POST"){
        if(request.url == '/comments'){
            let headers = request.headers;
            if (headers.hasOwnProperty('content')){
                data['comments'].push(headers['content']);
                
                response.setHeader('Content-Type', 'application/json');
                response.write(JSON.stringify(data));
                
                console.log(data);
            }
            else {
                response.statusCode = 400;
                response.statusMessage = "Bad request!";
                response.write('No content');
            }           
            }
        }
    else{
        response.statusCode = 400;
        response.statusMessage = "Bad request!";
        }
    if (request.url != '/favicon.ico'){
        data['user-agent'] += 1;
    }
    response.end();
}).listen(port, host, function () {
    console.log(`Сервер начал прослушивание запросов по адресу ${host} на ${port} порту `);
})
