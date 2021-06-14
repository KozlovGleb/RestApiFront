import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {FormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import {UsertasksComponent} from './components/usertasks/usertasks.component';
import {AuthGuard} from "./helpers/auth.guard";
import {JwtInterceptor} from "./helpers/jwtinterceptor";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AddTaskComponent} from './components/add-task/add-task.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

const appRoutes: Routes = [
  {path: 'tasks', component: UsertasksComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},

  //{ path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsertasksComponent,
    AddTaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},],
  bootstrap: [AppComponent]
})
export class AppModule {
}
