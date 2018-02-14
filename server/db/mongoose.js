var mongoose = require('mongoose');
const mLab = 'mongodb://test:test@ds149905.mlab.com:49905/todoappapi'

mongoose.Promise = global.Promise;
mongoose.connect(mLab || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
