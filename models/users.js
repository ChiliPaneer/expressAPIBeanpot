var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    name: {type: String, required: true, maxLength: 40},
    user_name: {type: String, required: true, maxLength: 20, unique: true},
    directory: {type:String}
  }
);

module.exports =  mongoose.model('User', UserSchema)