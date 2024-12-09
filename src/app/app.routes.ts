import { Routes } from '@angular/router';
import { OutnAboutScreenComponent } from './pages/outn-about-screen/outn-about-screen.component';
import { DiscountScreenComponent } from './pages/discount-screen/discount-screen.component';
import { SearchComponent } from './pages/search/search.component';
import { ReviewScreenComponent } from './pages/review-screen/review-screen.component';
import { CommunityScreenComponent } from './pages/community-screen/community-screen.component';

export const routes: Routes = [
  { path: '', component: OutnAboutScreenComponent },
  { path: 'discount', component: DiscountScreenComponent },
  { path: 'search', component: SearchComponent },
  { path: 'review', component: ReviewScreenComponent },
  { path: 'community', component: CommunityScreenComponent }
]