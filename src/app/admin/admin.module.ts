import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';

@NgModule({
 imports: [
    CommonModule,
    AdminRoutingModule
  ],
 declarations:[
	AdminComponent,
        HeaderComponent,
        FooterComponent,
	SideBarComponent,
	HomeComponent,
	LeftNavigationComponent
 ],
 exports: [AdminComponent]

})
export class AdminModule { }
