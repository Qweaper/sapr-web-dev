const MongoClient = require("mongodb").MongoClient;

const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/", {monitorCommands: true});

// async function run() {
//     try {
//         // Подключаемся к серверу
//         let db = await mongoClient.connect();
//         console.log("Подключение установлено");
//         return db;
//         // взаимодействие с базой данных
//     }catch(err) {
//         console.log(err);
//     } finally {
//         // Закрываем подключение при завершении работы или при ошибке
//         // await mongoClient.close();
//         // console.log("Подключение закрыто");
//     }
// }

module.exports = {
    mongoClient
};

