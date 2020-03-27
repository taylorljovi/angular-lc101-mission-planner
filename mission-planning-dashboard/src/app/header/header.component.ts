import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  missionName: string ='Mars 2030';
  carrierRocket: string = 'Plasma Max';
  Crew: string[] = ["Jessica Watkins", "Raja Chari", "Jasmin Moghbeli"]
  
  constructor() { }

  ngOnInit() {
  }

}
 