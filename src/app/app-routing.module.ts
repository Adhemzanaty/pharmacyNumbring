import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TicketsComponent } from './tickets/tickets.component';
import { UserOptionComponent } from './user-option/user-option.component';
import { WaitingPatientComponent } from './waiting-patient/waiting-patient.component';
import { WasafatComponent } from './wasafat/wasafat.component';
import { RegisterComponent } from './register/register.component';
import { UpdateWindowComponent } from './update-window/update-window.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { pathGuard } from './path.guard';

const routes: Routes = [
  {path: '' , redirectTo: '/login' , pathMatch: 'full'},
  {path: 'login' , component: LoginComponent},
  {path: 'nav' , component: NavbarComponent},
  {path: 'tickets/:window' , component: TicketsComponent},
  {path: 'user/:key' , component: UserOptionComponent},
  {path: 'wasafat' , component: WasafatComponent , canActivate: [pathGuard]},
  {path: 'waiting' , component: WaitingPatientComponent , canActivate: [pathGuard]},
  {path: 'window' , component: UpdateWindowComponent , canActivate: [pathGuard]},
  {path: 'register' , component: RegisterComponent},
  {path: '**' , component: NotFoundComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
