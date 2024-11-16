import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hydromet',
  templateUrl: './hydromet.component.html',
  styleUrls: ['./hydromet.component.scss']
})
export class HydrometComponent implements OnInit {

  showNavigationIndicators: any;
  showNavigationArrows: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
