import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TicketsComponent } from './tickets/tickets.component';
import { UserOptionComponent } from './user-option/user-option.component';
import { WaitingPatientComponent } from './waiting-patient/waiting-patient.component';
import { WasafatComponent } from './wasafat/wasafat.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { UpdateWindowComponent } from './update-window/update-window.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    TicketsComponent,
    UserOptionComponent,
    WaitingPatientComponent,
    WasafatComponent,
    FooterComponent,
    RegisterComponent,
    UpdateWindowComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgIf,
    NgFor
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
