import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([ 
      { path: '', component: LoginComponent },      
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
