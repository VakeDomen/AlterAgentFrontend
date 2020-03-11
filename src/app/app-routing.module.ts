import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClinetsComponent } from './pages/clinets/clinets.component';
import { ClinetComponent } from './pages/clinet/clinet.component';


const routes: Routes = [
  {
    path: '',
    component: ClinetsComponent,
  },
  {
    path: 'client/:id',
    component: ClinetComponent,
  },
  {
    path: '**',
    component: ClinetsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
