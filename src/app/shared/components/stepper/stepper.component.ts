import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  @Input()
  steps!: Array<any>
  @Input()
  currentStep!: number

  @Output()
  onStepChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  selectStep(step: number){
    this.currentStep = step
    this.onStepChange.emit(step)
  }

  activeStep(step: number){
    return this.currentStep === step
  }

  doneStep(step: number){
    return this.currentStep > step
  }

  firstStep(){
    return this.currentStep === 0
  }

  lastStep(){
    return this.currentStep === this.steps.length - 1
  }

  nextStep(){
    if(this.steps.length - 1 > this.currentStep){
      this.currentStep++
      this.onStepChange.emit(this.currentStep)
    }
  }

  prevStep(){
    if(this.currentStep > 0){
      this.currentStep--
      this.onStepChange.emit(this.currentStep)
    }
  }

}
