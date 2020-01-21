import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [NavbarComponent,SidebarComponent, DashboardComponent],
  imports: [
    
    CommonModule
  ],
  exports:[]
})
export class SharedModule { }
