import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserSettingsService } from '../user-settings.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-lesson-edit-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgbTooltip,
    NgClass,
    NgIf
  ],
  templateUrl: './lesson-edit-form.component.html',
})
export class LessonEditFormComponent implements OnInit, OnDestroy {
  lessonForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userSettingsService: UserSettingsService
  ) {
    this.lessonForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: [''],
      level: ['', [Validators.min(1), Validators.max(10)]],
      prerequisites: [''],
      tags: [''],
      copyright: ['']
    });
  }

  ngOnInit(): void {
    console.log("LessonEditFormComponent.ngOnInit()");
  }

  ngOnDestroy(): void {
    console.log("LessonEditFormComponent.ngOnDestroy()");
  }

  onSubmit(): void {
    if (this.lessonForm.valid) {
      const formData = this.lessonForm.value;
      console.log('Form data submitted:', formData);
      this.userSettingsService.lastLessonId = 1234;
      this.router.navigate(['lesson-list']).then(res => {
        console.log("Navigation to lesson-list completed", res);
      });
    } else {
      console.log('Form is invalid. Please check the required fields.');
    }
  }
}
