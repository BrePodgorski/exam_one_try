import { Component, OnInit } from '@angular/core';
import { QuestionService } from './../question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: Array<any>;

  constructor(private _questionService: QuestionService) { }

  ngOnInit() {
    this.componentGetAllQuestions();
  }
  componentGetAllQuestions(){
    this._questionService.serviceGetAllQuestions()
    .then((questionsFromServer) => this.questions = questionsFromServer)
    .catch((err) => console.log(err))
  }

}
