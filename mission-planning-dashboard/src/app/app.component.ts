import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mission-Planning-Dashboard';
  missionName: string ='Mars 2030';
  carrierRocket: string = 'Plasma Max';
}
