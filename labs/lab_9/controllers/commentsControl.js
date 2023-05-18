const {
    asyncFindAllData,
    asyncFindDataById,
    asyncInsertData,
    asyncUpdateData,
    asyncDeleteData,
    asyncInsertComment
} = require('../services/services.js');
const { ObjectId } = require('mongodb');

async function getComments(req, res){
    let result = await asyncFindAllData('comments');
    if (result !== -1) {
        res.json(result);
    }
    else {
        res.status(501).send('Something went wrong!');
    }
};

async function getCommentsByid(req, res, next) {
    let idParam = req.params['id'];
    let result = await asyncFindDataById(idParam, 'comments');
    if (result !== -1)
    {
        res.json(result);
    }
    else{
        res.status(404).send('Comment not found!');
    }
};

async function addComment(req, res, next) {
    let body = req.body;
    if (body['comments'] !== "" && body['userName'] !== "" && body['comments'] !== undefined && body['userName'] !== undefined)
    {
        let result = await asyncInsertData(body, 'comments');
        if (result !== -1) res.json(result);
        else {res.status(501).send('Something went wrong!');}
    }
    else{
        res.status(400).send('Bad request!');
    }
    
};

async function getModles(req, res, next) {
    let modelsList = await asyncFindAllData('models', {projection : {name:1}});
    res.send(modelsList); 
}; 

async function getModlesById(req, res, next) {
    let idValue = req.params['id'];
    let model = await asyncFindDataById({"_id": new ObjectId(idValue)}, 'models');
    res.send(model)
};

async function checkApiKey(req, res, next){
    let params = req.query;
    let login = params['login'];
    let pass = params['password'];
    let result = await asyncFindDataById({'APIkey': login, 'username': pass}, 'API_keys');
    if (result !== undefined)
    {
        next()
    }
    else{
        res.status(401).send('Forbidden!');
    };
};

async function addModel(req, res, next) {
    let data = req.body;
    let result = await asyncInsertData(data, 'models');
    res.send(result);
};

async function updateModel(req, res, next) {
    let data = req.body;
    let query = {"_id": new ObjectId(req.params['id'])};
    let update = await asyncUpdateData(query, data, 'models');
    let result = await asyncFindAllData('models');
    res.send(result);
}

async function deleteModel(req, res, next) {
    let idValue = req.params['id'];
    let result = await asyncDeleteData(idValue, 'models');
    res.send(result);
}

async function errorCatcher(error, req, res, next)
{
    res.status(500).send(`Server Error\nError: ${error}`);
};

module.exports = {
    addComment,
    getComments,
    getCommentsByid,
    getModles,
    getModlesById,
    checkApiKey,
    addModel,
    updateModel,
    deleteModel,
    errorCatcher
};