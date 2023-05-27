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
    try {
        let modelsList = await asyncFindAllData('models', {projection : {name:1}});
        res.send(modelsList); 
    } catch (error) {
        let err = new Error();
        next(error)
    }
}; 

async function getModlesById(req, res, next) {
    try {
        let idValue = req.params['id'];
        let model = await asyncFindDataById({"_id": new ObjectId(idValue)}, 'models');
        res.send(model);
    } catch (error) {
        let err = new Error();
        next(err)
    }
};

async function checkApiKey(req, res, next){
    try {
        let params = req.query;
        let login = params['login'];
        let API_key = req.headers['API-key'];
        if (API_key === undefined){
            let result = await asyncFindDataById({'username': login}, 'API_keys');
            if (result !== undefined && result !== null)
            {
                res.headers['API-key'] = result['APIkey'];
                next();
            }
            else{
                res.status(401).send('Forbidden!');
            };
        }
        } catch (error) {
        let err = new Error();
        next(err)
    }
};

async function addModel(req, res, next) {
    try {
        let data = req.body;
        let result = await asyncInsertData(data, 'models');
        res.send(result);
    } catch (error) {
        let err = new Error();
        next(err)
    }
};

async function updateModel(req, res, next) {
    try {
        let data = req.body;
        let query = {"_id": new ObjectId(req.params['id'])};
        let update = await asyncUpdateData(query, data, 'models');
        let result = await asyncFindAllData('models');
        res.send(result);
    } catch (error) {
        let err = new Error();
        next(err)
    }
    // проверять ошибки ЗДЕСЬ!
}

async function deleteModel(req, res, next) {
    try {
        let idValue = req.params['id'];
        let result = await asyncDeleteData(idValue, 'models');
        res.send(result);
    } catch (error) {
        let err = new Error();
        next(err)
    }
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