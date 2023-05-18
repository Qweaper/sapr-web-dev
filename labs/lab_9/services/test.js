const { mongoClient } = require("../configs/connection");

// mongoClient.connect()
//         .then((result) => {
//             let dbObj = result.db('MyWorkDB').collection('comments');
//             return dbObj.find().toArray()
//             })
//             .then((array)=>{console.log(array)});

async function getAll() {
    let connection = await mongoClient.connect()
    let dbObj = connection.db('MyWorkDB').collection('comments');
    let result = await dbObj.find().toArray()
    console.log(result);
}

async function dataBDconnection() {
    return 'something';
}


getAll()