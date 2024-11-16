import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnfnatComponent } from './enfnat/enfnat.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  { path: 'enfant', 
    component:EnfnatComponent 
   },
   {
    path:"parent",
    component:ParentComponent
   }
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
