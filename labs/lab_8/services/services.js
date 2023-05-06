const { mongoClient } = require("../configs/connection.js");
const { ObjectId } = require('mongodb');

// console.log(MyWorkDB);

const asyncFindAllComments = async () => {
    try{
        let connection = await mongoClient.connect();
        let dbObj = connection.db('MyWorkDB').collection('comments');
        return await dbObj.find().toArray();
    }
    catch(e){
        return -1;
    }
    finally{
        // mongoClient.close();
    };
};

const asyncFindCommentById = async (idValue) => {
    try{
        let connection = await mongoClient.connect()
            let collection = connection.db('MyWorkDB').collection('comments');
            let arr = await collection.findOne({"_id": new ObjectId(idValue)});
            return arr
    }
    catch(e){
        return -1;
    }
    finally{
        // mongoClient.close();
    };    
};

const asyncInsertComment = async (body) => {
    let userName = body['userName']
    let commentText = body['comments']
    try {
        let connection = await mongoClient.connect();
        let dbObj = connection.db('MyWorkDB').collection('comments')
        let result = await dbObj.insertOne(
            {
                username: userName,
                comment: commentText,
                date: new Date().toISOString()
            });
        return await asyncFindAllComments();
    } catch (e) {
        return -1
    }
    finally{
        // mongoClient.close();
    };
    
};

module.exports = {
    asyncFindAllComments,
    asyncFindCommentById,
    asyncInsertComment
};