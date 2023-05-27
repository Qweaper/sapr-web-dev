const { mongoClient } = require("../configs/connection.js");
const { ObjectId } = require('mongodb');


const asyncFindAllData = async (collection, projection={}) => {
        let connection = await mongoClient.connect();
        let dbObj = connection.db('MyWorkDB').collection(collection);
        return await dbObj.find({}, projection).toArray();
};

const asyncFindDataById = async (paramValue, collectionName, projection={}) => {
    let connection = await mongoClient.connect()
    let collection = connection.db('MyWorkDB').collection(collectionName);
    let arr = await collection.findOne(paramValue, projection).toArray();
    return arr;
};

const asyncInsertComment = async (body) => {
    let userName = body['userName']
    let commentText = body['comments']
    let connection = await mongoClient.connect();
    let dbObj = connection.db('MyWorkDB').collection('comments')
    let result = await dbObj.insertOne(
        {
            username: userName,
            comment: commentText,
            date: new Date().toISOString()
        });
    return await asyncFindAllComments('comments');
};

const asyncInsertData= async (objectData, collectionName) => {
    let connection = await mongoClient.connect();
    let dbObj = connection.db('MyWorkDB').collection(collectionName);
    if (collectionName === 'models') {
        let date = new Date().toISOString();
        objectData['creationDate'] = date;
        objectData['lastChangesDate'] = date;
    }
    let result = await dbObj.insertOne(objectData);
    return await asyncFindAllData(collectionName);

};

const asyncUpdateData = async (query, objectData, collectionName) => {
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

const asyncDeleteData = async (idValue, collectionName) => {
    let connection = await mongoClient.connect();
    let collection = connection.db('MyWorkDB').collection(collectionName);
    let arr = await collection.deleteOne({"_id": new ObjectId(idValue)});
};

module.exports = {
    asyncFindAllData,
    asyncFindDataById,
    asyncInsertData,
    asyncUpdateData,
    asyncDeleteData,
    asyncInsertComment
};