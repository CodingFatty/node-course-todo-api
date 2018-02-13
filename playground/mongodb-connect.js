// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Dennis', age: 25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error){
    return console.log('Unable to connect to MongoDB');
  }
  console.log('Connected to MongoDB server');

  // const db = client.db('TodoApp');
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // const db = client.db('TodoApp');
  // db.collection('Users').insertOne({
  //   name: 'Dennis',
  //   age: 25,
  //   location: 'Hong Kong',
  // }, (err, result) => {
  //   if (err){
  //     return console.log('Unable to insert');
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // })


  client.close();
});
