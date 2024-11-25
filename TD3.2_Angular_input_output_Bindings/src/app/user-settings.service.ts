import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {

  constructor() { }
  lastLessonId: number|null = null;
}
