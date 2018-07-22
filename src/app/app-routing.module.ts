import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactStartComponent } from './contacts/contact-start/contact-start.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { AppComponent } from './app.component';



const appRoutes: Routes = [
  
  { path: 'register', component: RegisterComponent },
  { path: 'home', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'contacts', component: ContactsComponent, children: [
      { path: '', component: ContactStartComponent },
      { path: 'new', component: ContactEditComponent },
      { path: ':id', component: ContactDetailComponent },
      { path: ':id/edit', component: ContactEditComponent },

    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
