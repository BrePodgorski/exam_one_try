import { Component, OnInit } from '@angular/core';
import { QuestionService } from './../question.service';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.css']
})
export class QuestionAnswerComponent implements OnInit {
  answers:Array<any>;
  constructor(private _questionService: QuestionService) { }

  ngOnInit() {
    this.componentGetAllAnswers();
  }
  compononentGetAllAnswers(){
    this._questionService.serviceGetAllAnswers()
    //creating a function to show all friends
    .then((answersFromServer)=> this.answers = answersFromServer)
    .catch((err)=> console.log(err))
    //finding it or catching errors
  }

}
