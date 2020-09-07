const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'cobadb';

// Create a new MongoClient
const client = new MongoClient(url, {useNewUrlParser: true});

const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('siswa');
    // Insert some documents
    collection.insertMany([
      {
          nama : "Diva",
          usia : 17,
          status : "siswa"
      },
      {
          nama : "Ninis",
          usia : 17,
          status : "siswa"
      },
      {
          nama : "Ajeng",
          usia : 18,
          status : "siswa"
      },
      {
          nama : "Fara",
          usia : 18,
          status : "siswa"
      }
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(4, result.result.n);
      assert.equal(4, result.ops.length);
      console.log("4 user has been added");
      callback(result);
    });
  }

  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('siswa');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
  }

const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('siswa');
    // Find some documents
    collection.find({'usia': 18}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs);
      callback(docs);
    });
  }

const updateDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('siswa');
    // Update document where a is 2, set b equal to 1
    collection.updateMany({ status : "siswa" }
      , { $set: { status : "pelajar" } }, function(err, result) {
      assert.equal(err, null);
      assert.equal(4, result.result.n);
      console.log("Updated the document with the field a equal to 2");
      callback(result);
    });  
  }

const removeDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('siswa');
    // Delete document where a is 3
    collection.deleteOne({ "usia" : 18 }, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Removed the document with the field a equal to 3");
      callback(result);
    });    
  }

const indexCollection = function(db, callback) {
    db.collection('siswa').createIndex(
      { "usia": 17 },
        null,
        function(err, results) {
          console.log(results);
          callback();
      }
    );
  };

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(db, function() {
        findDocuments(db, function() {
        updateDocument(db, function() {
        removeDocument(db, function() {
        indexCollection(db, function() {
  client.close();
});
});
});
});
});
});