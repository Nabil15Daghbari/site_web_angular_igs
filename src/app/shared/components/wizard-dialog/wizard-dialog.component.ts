import { Component, Input, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-wizard-dialog',
  templateUrl: './wizard-dialog.component.html',
  styleUrls: ['./wizard-dialog.component.css']
})
export class WizardDialogComponent implements OnInit {

  content: any;
  @Input()
  currentStep!: number
  constructor() { }

  ngOnInit(): any {
  }

  show({
    title,
    confirm,
    cancel,
    prev,
    stepsCount
  }: any) {
    this.content = {
      title,
      confirm,
      cancel: () => {
        this.content = null
        if (cancel) {
          cancel()
        }
      },
      prev,
      stepsCount
    }
  }

  actionBtnLabel() {
    return this.content && this.content.stepsCount === this.currentStep ? 'Enregistrer' : 'Suivant'
  }
  isfirstStep() {
    return this.content && this.currentStep === 0
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
