import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab-bar-view',
  imports: [],
  templateUrl: './tab-bar-view.component.html',
  styleUrl: './tab-bar-view.component.scss'
})
export class TabBarViewComponent {
  constructor(private router: Router) {}

  on_search(){
    this.router.navigate(['/search']);
  }

  on_review(){
    this.router.navigate(['/review']);
  }

  on_discount(){
    this.router.navigate(['/discount']);
  }

  on_profile(){
    // this.router.navigate(['/profile']);
  }

  on_community(){
    // this.router.navigate(['/community']);
  }
}
