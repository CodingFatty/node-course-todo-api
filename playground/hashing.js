const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 2
};

var token = jwt.sign(data, '123');
console.log(token);

var decoded = jwt.verify(token, '123');
console.log('decoded', decoded);

// var message = 'User number 3';
// var hash = SHA256(message).toString();
//
// console.log(message, hash)
//
//
// var data ={
//   id: 4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'secret').toString()
// }
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'secret').toString();
//
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Faulty Data');
// }
