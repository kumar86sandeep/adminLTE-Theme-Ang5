import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminComponent } from '../admin.component';
import { HomeComponent } from '../home/home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent,    
	children: [     
	  {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
          },     
          {
            path: 'home',
            component: HomeComponent
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
