import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // Ensure the path is correct
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { SuccessComponent } from './success/success.component';
import { CreateComponent } from './create/create.component';
import { FormService } from './shared/form.service';
import { ViewComponent } from './view/view.component'; // Ensure the path is correct

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    AboutComponent,
    SuccessComponent,
    CreateComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent] // Ensure AppComponent is listed here
})
export class AppModule { }
