import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuNavBarComponent } from './menu-nav-bar/menu-nav-bar.component';
import { LessonEditFormComponent } from './lesson-edit-form/lesson-edit-form.component';


export interface LessonPackage {
  title: string;
  description: string;
  category: string;
  level: string;
  prerequisite: string[];
  tags: string[];
  copyright: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenuNavBarComponent, LessonEditFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit{
  title = 'td3';
  lesson: LessonPackage = {
    title: '',
    description: '',
    category: '',
    level: '',
    prerequisite: [],
    tags: [],
    copyright: ''
  };
  constructor() {
    console.log('AppComponent.constructor()');
  }
  ngOnInit() {
    console.log('AppComponent.ngOnInit()');
  }
}


