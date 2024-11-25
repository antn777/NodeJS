import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-menu-nav-bar',
  standalone: true,
  templateUrl: './menu-nav-bar.component.html',
  styleUrl: './menu-nav-bar.component.css',
  imports: [
    RouterLink
  ]
})
export class MenuNavBarComponent {

}
