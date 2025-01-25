import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPrincipalComponent } from './dashboard-principal.component';
import { PrimengComponentsModule } from '../primeng-components/primeng-components.module';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ManageClientsComponent } from './pages/manage-clients/manage-clients.component';




@NgModule({
  declarations: [
    DashboardPrincipalComponent,
    ManageClientsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    PrimengComponentsModule,
    DashboardRoutingModule
  ],
  exports: [
    DashboardPrincipalComponent
  ]
})
export class DashboardPrincipalModule { }
