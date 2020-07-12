const MongoClient= require('mongodb').MongoClient;
const assert = require('assert');

//startup connection to mongodb server

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';//already created this db

//access server
MongoClient.connect(url,(err,client) => {

    assert.equal(err,null); //to check err is not null
    //if no err
    console.log('Connected correctly to the server');

    const db = client.db(dbname); // to connect to db
    const collection = db.collection("dishes");
    collection.insertOne({"name": "Uthappizza", "description": "test"},
    (err, result) => {
        assert.equal(err,null);

        console.log("After Insert:\n");
        console.log(result.ops);

        collection.find({}).toArray((err, docs) => {
            assert.equal(err,null);
            
            console.log("Found:\n");
            console.log(docs);

            db.dropCollection("dishes", (err, result) => {
                assert.equal(err,null);

                client.close();
            });
        });
    });











});

