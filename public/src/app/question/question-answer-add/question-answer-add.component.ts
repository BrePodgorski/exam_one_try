import { Component, OnInit } from '@angular/core';
import { QuestionService } from './../question.service';

@Component({
  selector: 'app-question-answer-add',
  templateUrl: './question-answer-add.component.html',
  styleUrls: ['./question-answer-add.component.css']
})
export class QuestionAnswerAddComponent implements OnInit {

  constructor(_questionsService: QuestionsService, private _router: Router) { }

  ngOnInit() {
  }
  addAnswerInNewComponent(formData){
    this._questionService.addAnswerInService(formData.value)
    //defining new function while inputting existing from service and data from form

    //.then takes in callback with one arg. the data response from server
      .then((response) => {
        console.log(response)
        //adding router navigation
        this._router.navigate(['/show/:id'])
      })

      .catch((err)=> console.log(err) )
      //these methods are being chained, like querying
    formData.reset()
  }
}
