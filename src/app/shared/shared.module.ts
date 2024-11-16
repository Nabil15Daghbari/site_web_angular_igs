import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIModule } from './ui/ui.module';

import { WidgetModule } from './widget/widget.module';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { WizardDialogComponent } from './components/wizard-dialog/wizard-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ConfirmDialogComponent,
    DialogComponent,
    NoDataComponent,
    PaginationComponent,
    SpinnerComponent,
    StepperComponent,
    WizardDialogComponent,
   
  ], 
  imports: [
    CommonModule,
    UIModule,
    WidgetModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule 
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ConfirmDialogComponent,
    DialogComponent,
    WizardDialogComponent,
    StepperComponent,
    PaginationComponent,  
    SpinnerComponent,
    NoDataComponent
  ]
})

export class SharedModule { }
