//all database operations
//since node module so exported

const assert = require('assert');

exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);//look for collection
     return coll.insert(document);
};
        // (err, result) => {
        // assert.equal(err, null);
        // console.log("Inserted " + result.result.n +
        //     " documents into the collection " + collection);
        // callback(result); //receive result as incoming parameter
        //result obj contains results prpty which contains n ie no of operations perormed
    

exports.findDocuments = (db, collection, callback) => {
    //search  in the collection
    const coll = db.collection(collection);
    return coll.find({}).toArray();
    //((err, docs) => {
    //     assert.equal(err, null);
    //     callback(docs);    //pass back retrieved docs    
    
};

exports.removeDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
   return  coll.deleteOne(document);
    //      (err, result) => {
    //     //first matched value
    //     assert.equal(err, null);
    //     console.log("Removed the document ", document);
    //     callback(result);  //after operation is complete      
    // });
};

exports.updateDocument = (db, document, update, collection, callback) => {
    //collection :in which this document exists
    const coll = db.collection(collection);
    coll.updateOne(document, { $set: update  //fields of document need to be updated
    }, null);
};
    //  (err, result) => {
    //     assert.equal(err, null);
    //     console.log("Updated the document with ", update);
    //     callback(result);        
    // });

