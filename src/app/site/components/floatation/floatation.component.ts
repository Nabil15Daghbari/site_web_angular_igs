import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floatation',
  templateUrl: './floatation.component.html',
  styleUrls: ['./floatation.component.scss']
})
export class FloatationComponent implements OnInit {

  showNavigationIndicators: any;
  showNavigationArrows: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
