import { Routes } from '@angular/router';
import {LessonDetailPageComponent} from "./lesson-detail-page/lesson-detail-page.component";

import {TestPage1Component} from "./test-page1/test-page1.component";



import {LessonEditFormComponent} from "./lesson-edit-form/lesson-edit-form.component";
import {LessonListPageComponent} from "./lesson-list-page/lesson-list-page.component";
const routes: Routes = [
  { path:'lesson-edit-form', component: LessonEditFormComponent },
  { path:'lesson-list', component: LessonListPageComponent },
  {path:'lesson/:id', component: LessonDetailPageComponent },
  { path:'test-page1', component: TestPage1Component },
];

export {routes};
