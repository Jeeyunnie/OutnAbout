import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outn-about-screen',
  imports: [],
  templateUrl: './outn-about-screen.component.html',
  styleUrl: './outn-about-screen.component.scss'
})
export class OutnAboutScreenComponent {
  constructor(private router: Router) {}

  on_start(){
    this.router.navigate(['/discount']);
  }
}
