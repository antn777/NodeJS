import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lesson-detail-page',
  standalone: true,
  templateUrl: './lesson-detail-page.component.html',
  styleUrls: ['./lesson-detail-page.component.css']
})
export class LessonDetailPageComponent implements OnInit {
  readonly initialId: number;
  id: number | undefined;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    // Get the initial id from snapshot
    this.initialId = +this.activatedRoute.snapshot.params['id'];
    console.log('initialId:', this.initialId);

    // Subscribe to changes in params
    this.activatedRoute.params.subscribe(currParams => {
      this.id = +currParams['id'];
      console.log('id:', this.id);
    });
  }

  ngOnInit(): void {}

  // Method to handle navigation to the next page
  onClickGoNextPage(): void {
    const nextId = (this.id) ? this.id + 1 : 1;
    this.router.navigate(['/lesson', nextId]);
  }
}
