import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpServices } from './emp.services';
import { HomeComponent } from './home/home.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { UsersComponent } from './users/users.component';
import { UserCardComponent } from './user-card/user-card.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LifeCycleComponent,
    UsersComponent,
    UserCardComponent,
    TemplateFormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmpServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
