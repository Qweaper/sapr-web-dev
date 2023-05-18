const { mongoClient } = require("../configs/connection.js");
const { ObjectId } = require('mongodb');

// console.log(MyWorkDB);

const asyncFindAllData = async (collection, projection={}) => {
    try{
        let connection = await mongoClient.connect();
        let dbObj = connection.db('MyWorkDB').collection(collection);
        return await dbObj.find({}, projection).toArray();
    }
    catch(e){
        let error = Error(e);
        next(error, req, res, next);
    }
    finally{
        // mongoClient.close();
    };
};

const asyncFindDataById = async (paramValue, collectionName, projection={}) => {
    try{
        let connection = await mongoClient.connect()
            let collection = connection.db('MyWorkDB').collection(collectionName);
            let arr = await collection.findOne(paramValue, projection);
            return arr
    }
    catch(e){
        let error = Error(e);
        next(error, req, res, next);
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
        return await asyncFindAllComments('comments');
    } catch (e) {
        return -1
    }
    finally{
        // mongoClient.close();
    };
    
};

const asyncInsertData= async (objectData, collectionName) => {
    try {
        let connection = await mongoClient.connect();
        let dbObj = connection.db('MyWorkDB').collection(collectionName);
        if (collectionName === 'models') {
            let date = new Date().toISOString();
            objectData['creationDate'] = date;
            objectData['lastChangesDate'] = date;
        }
        

        let result = await dbObj.insertOne(objectData);
        return await asyncFindAllData(collectionName);
    } 
    catch (e) {
        let error = Error(e);
        next(error, req, res, next);
    }
};

const asyncUpdateData = async (query, objectData, collectionName) => {
    try {
        console.log(query);
        console.log(objectData);
        let connection = await mongoClient.connect();
        let dbObj = connection.db('MyWorkDB').collection(collectionName);
        if (collectionName === 'models') {
            let date = new Date().toISOString();
            objectData['lastChangesDate'] = date;
        }
        let changes = {"$set" : objectData}
        console.log(changes);
        let result = await dbObj.updateOne(query, changes);
        return await asyncFindAllData(collectionName);
    } 
    catch (e) {let error = Error(e);
        next(error, req, res, next);}
}

const asyncDeleteData = async (idValue, collectionName) => {
    try{
        let connection = await mongoClient.connect();
        let collection = connection.db('MyWorkDB').collection(collectionName);
        let arr = await collection.deleteOne({"_id": new ObjectId(idValue)});
        return await asyncFindAllData(collectionName);
    }
    catch(e){ let error = Error(e);
        next(error, req, res, next);   }
    finally{
        // mongoClient.close();
    };    
};

module.exports = {
    asyncFindAllData,
    asyncFindDataById,
    asyncInsertData,
    asyncUpdateData,
    asyncDeleteData,
    asyncInsertComment
};