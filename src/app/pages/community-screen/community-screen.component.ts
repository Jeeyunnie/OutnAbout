import { Component } from '@angular/core';
import { TabBarViewComponent } from "../../views/tab-bar-view/tab-bar-view.component";
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-community-screen',
  imports: [TabBarViewComponent, MatCardModule],
  templateUrl: './community-screen.component.html',
  styleUrl: './community-screen.component.scss'
})
export class CommunityScreenComponent {

}
