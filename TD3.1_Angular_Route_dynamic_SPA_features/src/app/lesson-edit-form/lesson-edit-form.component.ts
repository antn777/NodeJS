import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {Router} from "@angular/router";
import {UserSettingsService} from "../user-settings.service";

@Component({
  selector: 'app-lesson-edit-form',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './lesson-edit-form.component.html',

})
export class LessonEditFormComponent {

  ngOnInit(): void {
    console.log("LessonEditFormComponent.ngOnInit()");
  }

  ngOnDestroy(): void {
    console.log("LessonEditFormComponent.ngOnDestroy()");
  }

  constructor(private router: Router, private userSettingsService:
    UserSettingsService) {
  }

  onClickSubmit(): void {
    this.userSettingsService.lastLessonId = 1234;
    // Could execute code (send save request to server)... then navigate
    this.router.navigate(['lesson-list']).then(res => {
      console.log("Navigation to lesson-list completed", res);

    });


  }
}
