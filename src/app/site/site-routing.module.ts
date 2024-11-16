import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProposComponent } from './components/propos/propos.component';
import { GouvernanceComponent } from './components/gouvernance/gouvernance.component';
import { CollaborateursComponent } from './components/collaborateurs/collaborateurs.component';
import { ConsultingComponent } from './components/consulting/consulting.component';
import { RMDComponent } from './components/rmd/rmd.component';
import { EnvironmentalComponent } from './components/environmental/environmental.component';
import { EnergyComponent } from './components/energy/energy.component';
import { RdComponent } from './components/rd/rd.component';
import { GoldComponent } from './components/gold/gold.component';
import { TestingComponent } from './components/testing/testing.component';
import { LabComponent } from './components/lab/lab.component';
import { PreparationComponent } from './components/preparation/preparation.component';
import { CommunitionComponent } from './components/communition/communition.component';
import { GravityComponent } from './components/gravity/gravity.component';
import { GoldTestingComponent } from './components/gold-testing/gold-testing.component';
import { FloatationComponent } from './components/floatation/floatation.component';
import { HydrometComponent } from './components/hydromet/hydromet.component';
import { SeparationComponent } from './components/separation/separation.component';
import { MagneticComponent } from './components/magnetic/magnetic.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ClientsComponent } from './components/clients/clients.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  }, 
  {
    path:'a-propos',
    component:ProposComponent
  } , 
  {
    path:'gouvernance',
    component:GouvernanceComponent
  } , 
  {
    path:'Collaborateurs' ,
    component:CollaborateursComponent
  } , 
  
  {
    path: 'Consulting',
    component: ConsultingComponent
  },
  {
    path: 'Environmental',
    component: EnvironmentalComponent
  },
  {
    path: 'energy',
    component: EnergyComponent
  },
  {
    path: 'rd',
    component: RdComponent
  },
  {
    path:'rmd' ,
    component:RMDComponent
  } , 
  {
    path:"Gold" ,
    component:GoldComponent
  }, 
  {
    path:'testing' ,
    component:TestingComponent
  },
  {
    path:'lab' ,
    component:LabComponent
  
  }
  //  
  ,
  {
    path:'preparation' ,
    component:PreparationComponent
  
  }
  ,
  {
    path:'Communition' ,
    component:CommunitionComponent
  
  }
  ,
  {
    path:'Gravity' ,
    component:GravityComponent
  
  }
  ,
  {
    path:'Gold_Testing' ,
    component:GoldTestingComponent
  
  }
  ,
  {
    path:'Floatation' ,
    component:FloatationComponent
  
  }
  ,
  {
    path:'Hydromet' ,
    component:HydrometComponent
  
  }
  ,
  {
    path:'Separation' ,
    component:SeparationComponent
  
  }
  ,
  {
    path:'Magnetic' ,
    component:MagneticComponent
  
  },
  {
    path:'projects' ,
    component:ProjectsComponent
  
  }
  ,
  {
    path:'clients' ,
    component:ClientsComponent
  
  },
  {
    path:'news' , 
    component:NewsComponent
  
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
