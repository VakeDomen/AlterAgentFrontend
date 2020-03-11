import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LocalAuthComponent } from './components/auth/local-auth/local-auth.component';
import { LocalLoginComponent } from './components/auth/local-login/local-login.component';
import { LocalRegisterComponent } from './components/auth/local-register/local-register.component';
import { ClinetsComponent } from './pages/clinets/clinets.component';
import { ClinetComponent } from './pages/clinet/clinet.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientCardComponent } from './components/client-card/client-card.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { TagsDashobardComponent } from './pages/tags-dashobard/tags-dashobard.component';
import { ServicesDashboardComponent } from './pages/services-dashboard/services-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LocalAuthComponent,
    LocalLoginComponent,
    LocalRegisterComponent,
    ClinetsComponent,
    ClinetComponent,
    ClientCardComponent,
    ClientListComponent,
    TagsDashobardComponent,
    ServicesDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
