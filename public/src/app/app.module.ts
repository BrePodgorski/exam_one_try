import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//add routing import
import { routing } from './app.routes';
//add these
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { QuestionShowComponent } from './question/question-show/question-show.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionNewComponent } from './question/question-new/question-new.component';
import { QuestionAnswerComponent } from './question/question-answer/question-answer.component';
import { QuestionService } from './question/question.service';
import { QuestionAnswerAddComponent } from './question-answer-add/question-answer-add.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionShowComponent,
    QuestionListComponent,
    QuestionNewComponent,
    QuestionAnswerComponent,
    QuestionAnswerAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
