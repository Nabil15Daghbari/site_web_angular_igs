import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-gouvernance',
  templateUrl: './gouvernance.component.html',
  styleUrls: ['./gouvernance.component.scss']
})
export class GouvernanceComponent implements OnInit {

  carouselOption: OwlOptions = {
    items: 1,
    loop: false,
    margin: 24,
    nav: false,
    dots: false,
    responsive: {
      672: {
        items: 3
      },
      912: {
        items: 4
      },
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
