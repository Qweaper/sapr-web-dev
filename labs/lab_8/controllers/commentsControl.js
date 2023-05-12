const {
    asyncFindAllComments,
    asyncFindCommentById,
    asyncInsertComment
} = require('../services/services.js');

async function getComments(req, res){
    let result = await asyncFindAllComments();
    if (result !== -1) {
        res.json(result);
    }
    else {
        res.status(501).send('Something went wrong!');
    }
};

async function getCommentsByid(req, res) {
    let idParam = req.params['id'];
    let result = await asyncFindCommentById(idParam);
    if (result !== -1)
    {
        res.json(result);
    }
    else{
        res.status(404).send('Comment not found!');
    }
};

async function addComment(req, res) {
    let body = req.body;
    if (body['comments'] !== "" && body['userName'] !== "" && body['comments'] !== undefined && body['userName'] !== undefined)
    {
        let result = await asyncInsertComment(body);
        if (result !== -1) res.json(result);
        else {res.status(501).send('Something went wrong!');}
    }
    else{
        res.status(400).send('Bad request!');
    }
    
};

module.exports = {
    addComment,
    getComments,
    getCommentsByid
};