import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layouts/layout.component';
import { AuthGuard } from './account/auth/guards/auth.guard';
import { HomeComponent } from './site/components/home/home.component';

const routes: Routes = [
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  
   
  { path: 'pages', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },



  { path: 'igs', loadChildren: () => import('./site/site.module').then(m => m.SiteModule) },


 
 
];  

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
