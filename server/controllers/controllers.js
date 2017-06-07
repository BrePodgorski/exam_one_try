let mongoose = require('mongoose');
let Question = mongoose.model('Question');


module.exports ={
  addQuestion: (req, res) =>{
    let question = new Question(req.body);
    console.log(question);
    question.save((err, savedQuestion) => {
      if(err){
          console.log(err);
          return res.status(500).send("Error saving question")
        }else{
          // return res.status(200).send("cool");
          return res.json(savedQuestion);
          //referring to... what we pass into this function on front end
          //returning a full object because we are adding a new friend
        }
      })
  },
  getAllQuestions: (req, res)=>{
    Question.find({}, (err, questions)=>{
      if(err){
          console.log(err);
          return res.status(500).send("Error getting question")
        }else{
          console.log(questions);
          // return res.status(200).send("cool");
          return res.json(questions);
        }
      })
  },
  getSingleQuestion: (req, res)=>{
    Question.findOne({_id: req.params.id}, (err, question)=>{
    if(err){
        console.log(err);
        return res.status(500).send("Error getting question")
      }else{
        console.log("########");
        // console.log(question);
        // return res.status(200).send("cool");
        return res.json(question);
      }
    })
  },
  addAnswer: (req, res)=>{
    let answer = new Answer(req.body);
    console.log(answer);
    answer.save((err, savedAnswer) => {
      if(err){
          console.log(err);
          return res.status(500).send("Error saving question")
        }else{
          // return res.status(200).send("cool");
          return res.json(savedAnswer);
          //referring to... what we pass into this function on front end
          //returning a full object because we are adding a new friend
        }
      })
  },
  getAllAnswers: (req,res)=>{
    Answer.find({}, (err, answers)=>{
      if(err){
          console.log(err);
          return res.status(500).send("Error getting question")
        }else{
          console.log(answers);
          // return res.status(200).send("cool");
          return res.json(answers);
        }
    })
}
}
