let mongoose = require('mongoose');

let Schema = mongoose.Schema;
let QuestionSchema = new Schema({
  question: {type: String, required: true},
  description: {type: String, required: true},
  // name: {type: String, required: false}
  // answer_count: {type: Number, re}
}, {timestamps:true})

let AnswerSchema = new Schema({
  answer: {type: String, required: true},
  ans_description: {type: String, required: false},
  name: {type: String, required: true}
}, {timestamps:true})


//code

// let FriendSchema = new Schema({
//   first_name: {type:String, required:  true},
//   last_name: {type:String, required:  true},
//   birthday: {type:Date, required:  true},
// }, {timestamps:true})
//
mongoose.model('Question', QuestionSchema);
mongoose.model('Answer', AnswerSchema);
