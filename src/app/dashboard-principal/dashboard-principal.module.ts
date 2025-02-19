import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPrincipalComponent } from './dashboard-principal.component';
import { PrimengComponentsModule } from '../primeng-components/primeng-components.module';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ManageClientsComponent } from './pages/manage-clients/manage-clients.component';
import { TablaClientesComponent } from './components/tabla-clientes/tabla-clientes.component';
import { InfoClienteComponent } from './components/info-cliente/info-cliente.component';
import { AgregarClienteDialogComponent } from './components/agregar-cliente-dialog/agregar-cliente-dialog.component';





@NgModule({
  declarations: [
    DashboardPrincipalComponent,
    ManageClientsComponent,
    TablaClientesComponent,
    InfoClienteComponent,
    AgregarClienteDialogComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    PrimengComponentsModule,
    DashboardRoutingModule,

  ],
  exports: [
    DashboardPrincipalComponent
  ]
})
export class DashboardPrincipalModule { }
