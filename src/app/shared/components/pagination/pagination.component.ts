import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Page } from '../../models';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  pageNumber!: number

  @Input()
  pageSize!: number

  @Input()
  page!: Page<any>

  @Output()
  onPageNumberChange = new EventEmitter<number>()

  @Output()
  onPageSizeChange = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  onClickNext(){
    if(this.page.last){
      return;
    }
    this.onPageNumberChange.emit(++this.pageNumber)
  }

  onClickPrev(){
    if(this.pageNumber === 0){
      return
    }
    this.onPageNumberChange.emit(--this.pageNumber)
  }

}
