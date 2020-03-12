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
import { TagsDashobardComponent } from './pages/tags-dashobard/tags-dashobard.component';
import { ServicesDashboardComponent } from './pages/services-dashboard/services-dashboard.component';
import { TagsListComponent } from './components/tags/tags-list/tags-list.component';
import { TagNewComponent } from './components/tags/tag-new/tag-new.component';
import { TagComponent } from './components/tags/tag/tag.component';
import { ClientNewComponent } from './components/clients/client-new/client-new.component';
import { TagBindComponent } from './components/tags/tag-bind/tag-bind.component';
import { ClientEditComponent } from './components/clients/client-edit/client-edit.component';

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
    ServicesDashboardComponent,
    TagsListComponent,
    TagNewComponent,
    TagComponent,
    ClientNewComponent,
    TagBindComponent,
    ClientEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    ColorPickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
