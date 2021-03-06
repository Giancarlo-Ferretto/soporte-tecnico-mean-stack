import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ProfileResolver } from './auth/profile.resolver';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { OpenTicketsComponent } from './pages/tickets/open-tickets/open-tickets.component';
import { PendingTicketsComponent } from './pages/tickets/pending-tickets/pending-tickets.component';
import { ClosedTicketsComponent } from './pages/tickets/closed-tickets/closed-tickets.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { NewTicketComponent } from './pages/ticket/new-ticket/new-ticket.component';
import { AllTicketsComponent } from './pages/tickets/all-tickets/all-tickets.component';
import { AdminGuard } from './admin/admin.guard';
import { TicketsComponent } from './admin/tickets/tickets.component';
import { UsersComponent } from './admin/users/users.component';
import { Error403Component } from './pages/errors/error403/error403.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"", component:HomeComponent, canActivate: [AuthGuard], resolve: {profile: ProfileResolver}},
  {path:"ticket/:id/ver", component:TicketComponent, canActivate: [AuthGuard], resolve: {profile: ProfileResolver}},
  {path:"ticket/nuevo", component:NewTicketComponent, canActivate: [AuthGuard], resolve: {profile: ProfileResolver}},
  {path:"tickets/abiertos", component:OpenTicketsComponent, canActivate: [AuthGuard], resolve: {profile: ProfileResolver}},
  {path:"tickets/enproceso", component:PendingTicketsComponent, canActivate: [AuthGuard], resolve: {profile: ProfileResolver}},
  {path:"tickets/cerrados", component:ClosedTicketsComponent, canActivate: [AuthGuard], resolve: {profile: ProfileResolver}},
  {path:"tickets/historico", component:AllTicketsComponent, canActivate: [AuthGuard], resolve: {profile: ProfileResolver}},
  {path:"admin/tickets", component:TicketsComponent, canActivate: [AuthGuard, AdminGuard]},
  {path:"admin/usuarios", component:UsersComponent, canActivate: [AuthGuard, AdminGuard]},
  {path:"403", component:Error403Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
