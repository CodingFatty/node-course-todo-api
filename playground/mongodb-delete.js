// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error){
    return console.log('Unable to connect to MongoDB');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Play'}).then((result) => {
    //   console.log(result);
    // });
    // //deleteOne
    // db.collection('Todos').deleteOne({text: 'Play'}).then((result) => {
    //   console.log(result);
    // });
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //   console.log(result);
    // })

    // db.collection('Users').deleteMany({name: 'Dennis'}).then((result) => {
    //   console.log(result);
    // })
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5a8264e98e7bae03c36b9059')}).then((result) => {
      console.log(result);
    })
  // client.close();
});
