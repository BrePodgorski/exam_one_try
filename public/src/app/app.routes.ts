import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionShowComponent } from './question/question-show/question-show.component';
import { QuestionNewComponent } from './question/question-new/question-new.component';
import { QuestionAnswerComponent } from './question/question-answer/question-answer.component';

const APP_ROUTES: Routes = [
  {path: '', component: QuestionComponent, children:[
    {path: 'list', component: QuestionListComponent},
    //this WAS CHanged from having login being index and question being empty
    //all corresponds to components
    {path: 'new', component: QuestionNewComponent},
    // {path: 'answer/:id', component: QuestionAnswerComponent},
    {path: 'show/:id', component: QuestionShowComponent}
  ] },
];

export const routing = RouterModule.forRoot(APP_ROUTES);

//importing routes, and where things will be directed based on what's typed in
