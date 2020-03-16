import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LocalAuthComponent } from './components/auth/local-auth/local-auth.component';
import { LocalLoginComponent } from './components/auth/local-login/local-login.component';
import { LocalRegisterComponent } from './components/auth/local-register/local-register.component';
import { ClinetsComponent } from './pages/clinets/clinets.component';
import { ClinetComponent } from './pages/clinet/clinet.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientCardComponent } from './components/clients/client-card/client-card.component';
import { ClientListComponent } from './components/clients/client-list/client-list.component';
import { TagsDashboardComponent } from './pages/tags-dashboard/tags-dashboard.component';
import { ServicesDashboardComponent } from './pages/services-dashboard/services-dashboard.component';
import { TagsListComponent } from './components/tags/tags-list/tags-list.component';
import { TagNewComponent } from './components/tags/tag-new/tag-new.component';
import { TagComponent } from './components/tags/tag/tag.component';
import { ClientNewComponent } from './components/clients/client-new/client-new.component';
import { TagBindComponent } from './components/tags/tag-bind/tag-bind.component';
import { ClientEditComponent } from './components/clients/client-edit/client-edit.component';
import { ServiceComponent } from './components/services/service/service.component';
import { ServiceBindComponent } from './components/services/service-bind/service-bind.component';
import { ServiceNewComponent } from './components/services/service-new/service-new.component';
import { ServiceListComponent } from './components/services/service-list/service-list.component';
import { SessionAddComponent } from './components/sessions/session-add/session-add.component';
import { SessionListComponent } from './components/sessions/session-list/session-list.component';
import { SessionComponent } from './components/sessions/session/session.component';

import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { 
  MatDatepickerModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatNativeDateModule
 } from '@angular/material';


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
    TagsDashboardComponent,
    ServicesDashboardComponent,
    TagsListComponent,
    TagNewComponent,
    TagComponent,
    ClientNewComponent,
    TagBindComponent,
    ClientEditComponent,
    ServiceComponent,
    ServiceBindComponent,
    ServiceNewComponent,
    ServiceListComponent,
    SessionAddComponent,
    SessionListComponent,
    SessionComponent,
    DatepickerComponent,
  ],
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDatepickerModule,
    FormsModule,
    ToastrModule.forRoot(),
    ColorPickerModule,

    MatDatepickerModule,
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
