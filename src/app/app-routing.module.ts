import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClinetsComponent } from './pages/clinets/clinets.component';
import { ClinetComponent } from './pages/clinet/clinet.component';
import { TagsDashboardComponent } from './pages/tags-dashboard/tags-dashboard.component';
import { ServicesDashboardComponent } from './pages/services-dashboard/services-dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { LocalAuthComponent } from './components/auth/local-auth/local-auth.component';


const routes: Routes = [
  {
    path: '',
    component: ClinetsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'tags',
    component: TagsDashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'services',
    component: ServicesDashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'client/:id',
    component: ClinetComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LocalAuthComponent,
  },
  {
    path: '**',
    component: ClinetsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
