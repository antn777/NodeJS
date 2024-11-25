import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


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
  imports: [RouterOutlet],
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


