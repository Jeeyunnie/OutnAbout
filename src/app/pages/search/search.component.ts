import { Component } from '@angular/core';
import { TabBarViewComponent } from "../../views/tab-bar-view/tab-bar-view.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [TabBarViewComponent, CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  search_term: string = '';

  good_deals = [
    { src: 'assets/icecream.jpg', alt: 'Deal 1', title: 'Ice Cream Deal 1' },
    { src: 'assets/icecream.jpg', alt: 'Deal 2', title: 'Ice Cream Deal 2' },
    { src: 'assets/icecream.jpg', alt: 'Deal 3', title: 'Ice Cream Deal 3' },
    { src: 'assets/icecream.jpg', alt: 'Deal 4', title: 'Ice Cream Deal 4' },
    { src: 'assets/icecream.jpg', alt: 'Deal 5', title: 'Ice Cream Deal 5' },
    { src: 'assets/icecream.jpg', alt: 'Deal 6', title: 'Ice Cream Deal 6' }
  ];

  explore_neighborhood = [
    { src: 'assets/icecream.jpg', alt: 'Neighborhood 1', title: 'Downtown Toronto' },
    { src: 'assets/icecream.jpg', alt: 'Neighborhood 2', title: 'Yorkville Area' },
    { src: 'assets/icecream.jpg', alt: 'Neighborhood 3', title: 'Queen Street West' },
    { src: 'assets/icecream.jpg', alt: 'Neighborhood 4', title: 'The Beaches' },
    { src: 'assets/icecream.jpg', alt: 'Neighborhood 5', title: 'High Park' },
    { src: 'assets/icecream.jpg', alt: 'Neighborhood 6', title: 'Distillery District' }
  ];

  foods = [
    'Margherita', 'Pepperoni', 'Hawaiian', 'Meat Lovers', 'Vegetarian', 'Vegan'
  ];

  get filtered_suggestions() {
    return this.foods.filter((food) => food.toLowerCase().includes(this.search_term.toLowerCase()));
  }

  // Function to handle item selection and navigate
  navigateToUrl() {
    // For demo, this just logs the URL. In a real app, you might use a router.
    console.log('Navigating to:');
    // If you're using Angular Router, you'd do something like:
    // this.router.navigate([url]);
  }
}
