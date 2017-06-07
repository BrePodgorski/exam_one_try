import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class QuestionService {

  constructor(private _http: Http) { }
  addQuestionInService(questionObjectFromComponent){
    return this._http.post('/api/questions', questionObjectFromComponent)
    .map( (responseFromTheServer: Response) => responseFromTheServer.json())
    .toPromise()
  }
  serviceGetAllQuestions(){
    return this._http.get('/api/questions/')
    .map( (responseFromTheServer: Response )=> responseFromTheServer.json())
    .toPromise()
  }
  serviceGetSingleQuestion(theQuestionIdFromTheComponent){
    return this._http.get('/api/questions/' + theQuestionIdFromTheComponent)
    .map( (responseFromTheServer: Response) => responseFromTheServer.json())
    .toPromise()

  }
  addAnswerInService(answerObjectFromComponent){
    return this._http.post('/api/answers', answerObjectFromComponent)
    .map( (responseFromTheServer: Response) => responseFromTheServer.json())
    .toPromise()

  }
  serviceGetAllAnswers(){
    return this._http.get('/api/answers/')
    .map( (responseFromTheServer: Response )=> responseFromTheServer.json())
    .toPromise()
  }

}
