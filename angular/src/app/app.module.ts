import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/site/first/first.component';
import { SecondComponent } from './components/site/second/second.component';


const appRoutes: Routes = [
  { path: 'login', component: FirstComponent },
  { path: 'home', component: SecondComponent},
  { path: '',
  redirectTo:'/login',
  pathMatch:'full'
  }
  ];


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
