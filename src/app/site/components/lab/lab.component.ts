import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss']
})
export class LabComponent implements OnInit {
  showNavigationIndicators: any;
  showNavigationArrows: any;
  constructor() { }

  ngOnInit(): void {
  }

}
