import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  content: any;
  constructor() { }

  ngOnInit(): any {
  }

  show({
    title,
    confirm,
    cancel,
    btnLabel
  }: any) {
    this.content = {
      title,
      btnLabel: btnLabel ?? 'btns.save',
      confirm,
      cancel: () => {
        this.content = null
        if (cancel) {
          cancel()
        }
      }
    }
  }

  hide() {
    if (this.content.cancel) {
      this.content.cancel()
    }
    this.content = null
  }

  protected onClickOutside(event: Event) {
    event.stopPropagation()
    event.preventDefault()
    this.hide()
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(evt: KeyboardEvent) {
    this.hide()
  }

}
