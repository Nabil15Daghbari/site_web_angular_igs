import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-enfnat',
  templateUrl: './enfnat.component.html',
  styleUrls: ['./enfnat.component.scss']
})
export class EnfnatComponent implements OnInit {

  @Input() item= '' ;

  constructor() { }

  ngOnInit(): void {
  }

}
