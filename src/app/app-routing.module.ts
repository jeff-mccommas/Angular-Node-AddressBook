import { LoginComponent } from './login/login.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactStartComponent } from './contacts/contact-start/contact-start.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LogoutComponent } from './logout/logout.component';



const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: '', component: LogoutComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'contacts', component: ContactsComponent, children: [
    {path: '', component: ContactStartComponent},
    {path: 'new', component: ContactEditComponent},
    {path: ':id', component: ContactDetailComponent},
    {path: ':id/edit', component: ContactEditComponent},

  ]},
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
