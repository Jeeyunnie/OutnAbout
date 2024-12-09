import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab-bar-view',
  templateUrl: './tab-bar-view.component.html',
  styleUrls: ['./tab-bar-view.component.scss'],
  imports: [CommonModule]
})
export class TabBarViewComponent {
  selected_tab: string = '';

  constructor(private router: Router) { }

  on_search() {
    this.selected_tab = 'search';
    this.router.navigate(['/search']);
  }

  on_review() {
    this.selected_tab = 'review';
    this.router.navigate(['/review']);
  }

  on_discount() {
    this.selected_tab = 'discount';
    this.router.navigate(['/discount']);
  }

  on_profile() {
    this.selected_tab = 'profile';
    // this.router.navigate(['/profile']);
  }

  on_community() {
    this.selected_tab = 'community';
    this.router.navigate(['/community']);
  }
}
