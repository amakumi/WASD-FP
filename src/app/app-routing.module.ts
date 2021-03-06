import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ImLostComponent } from './im-lost/im-lost.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { BuyComponent } from './buy/buy.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { FileUploadComponent } from './upload/file-upload/file-upload.component';
import { SuccessComponent } from './buy/success/success.component';
import { CancelComponent } from './buy/cancel/cancel.component';
import { EventPageComponent } from './event-page/event-page.component';
import { CancelEventComponent } from './event-page/cancel-event/cancel-event.component';
import { UpdateEventComponent } from './event-page/update-event/update-event.component';
import { EventSuccessComponent } from './create-event/event-success/event-success.component';
import { FaqComponent } from './home/faq/faq.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'create', component: CreateEventComponent, canActivate: [AuthGuard]},
  {path: 'buy', component: BuyComponent},
  {path: 'buy/:event_id', component: BuyComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'success', component: SuccessComponent},
  {path: 'eventsuccess', component: EventSuccessComponent},
  {path: 'cancel', component: CancelComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'cancel/:event_id', component: CancelComponent},
  {path: 'cancelEvent', component: CancelEventComponent, canActivate: [AuthGuard]},
  {path: 'cancelEvent/:event_id', component: CancelEventComponent, canActivate: [AuthGuard]},
  {path: 'update', component: UpdateEventComponent},
  {path: 'update/:event_id', component: UpdateEventComponent},

  {path: 'event/:event_id', component: EventPageComponent},

  {path: 'proofing/:event_id/:id/:email', component: FileUploadComponent},
  {path: 'proofing', component: FileUploadComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path: '**', component: ImLostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
