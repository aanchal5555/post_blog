import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component'; // Import the LoginComponent
import { AboutComponent } from './about/about.component';
import { SuccessComponent } from './success/success.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component'; // Import the ViewComponent


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent }, // Redirect to LoginComponent for the 'login' path
  { path: 'about', component: AboutComponent },
  { path: 'success', component:SuccessComponent},
  { path: 'create', component:CreateComponent},
  { path: 'view', component: ViewComponent } // Define ViewComponent for the 'view' path

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
