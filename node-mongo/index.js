const MongoClient= require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');

//startup connection to mongodb server

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';//already created this db

//access server
MongoClient.connect(url,(err,client) => {

    assert.equal(err,null); //to check err is not null
    //if no err
    console.log('Connected correctly to the server');

    const db = client.db(dbname); // to connect to db
    // const collection = db.collection("dishes");
    // collection.insertOne({"name": "Uthappizza", "description": "test"},
    // (err, result) => {
    //     assert.equal(err,null);

    //     console.log("After Insert:\n");
    //     console.log(result.ops);

    //     collection.find({}).toArray((err, docs) => {
    //         assert.equal(err,null);
            
    //         console.log("Found:\n");
    //         console.log(docs);

    //         db.dropCollection("dishes", (err, result) => {
    //             assert.equal(err,null);

    //             client.close();
    //         });
    //     });
    // });

    dboper.insertDocument(db, { name: "Vadonut", description: "Test"}, //db when we called mongoclient connect so noes where to access database
    "dishes", (result) => {
        console.log("Insert Document:\n", result.ops);

        dboper.findDocuments(db, "dishes", (docs) => {
            console.log("Found Documents:\n", docs);

            dboper.updateDocument(db, { name: "Vadonut" },
                { description: "Updated Test" }, "dishes",
                (result) => {
                    console.log("Updated Document:\n", result.result);
// fxn call inside fxn callback of the prrvious
                    dboper.findDocuments(db, "dishes", (docs) => {
                        console.log("Found Updated Documents:\n", docs);
                        
                        db.dropCollection("dishes", (result) => {
                            console.log("Dropped Collection: ", result);

                            client.close(); // clean out dishes collection 
                        });
                    });
                });
            });
        });
    });


                //dishes is the collections
            
        










