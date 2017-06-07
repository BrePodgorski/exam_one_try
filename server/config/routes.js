var controller = require('./../controllers/controllers');
module.exports = app => {

  app.post('/api/questions', controller.addQuestion);
  app.get('/api/questions', controller.getAllQuestions);
  app.get('/api/questions/:id', controller.getSingleQuestion);
  app.post('/api/answers', controller.addAnswer);
  app.get('/api/answers', controller.getAllAnswers);

}
