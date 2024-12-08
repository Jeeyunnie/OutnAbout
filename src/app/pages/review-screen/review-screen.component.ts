import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { TabBarViewComponent } from '../../views/tab-bar-view/tab-bar-view.component';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-review-screen',
  templateUrl: './review-screen.component.html',
  styleUrls: ['./review-screen.component.scss'],
  imports:[ CommonModule,ReactiveFormsModule, TabBarViewComponent, MatCardModule]
})
export class ReviewScreenComponent {
  reviewForm: FormGroup;
  reviews: { username: string; rating: number; content: string }[] = [];

  constructor(private fb: FormBuilder) {
    this.reviewForm = this.fb.group({
      username: ['', Validators.required],
      content: ['', Validators.required],
      rating: [1, [Validators.required, Validators.min(1), Validators.max(5)]],
    });
  }

  submitReview() {
    if (this.reviewForm.valid) {
      this.reviews.push(this.reviewForm.value);
      this.reviewForm.reset({ rating: 1 }); // Reset the form, with default rating of 1
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
}
