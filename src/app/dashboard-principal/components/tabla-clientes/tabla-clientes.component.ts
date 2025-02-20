import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Table } from 'primeng/table'
import { Cliente } from '../../interfaces/Cliente';
import { ManageClientsService } from '../../services/manageclient.service';
import Swal from 'sweetalert2'
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

interface Columna {
  field: string;
  header: string;
}



@Component({
  selector: 'app-tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styles: ``
})
export class TablaClientesComponent implements OnInit {

  @ViewChild("dt") table !: Table
  @ViewChild("confirmDeleteSwal") swalConfirmClientDeleted!:SwalComponent
  clientes: Cliente[] = []
  cols!: Columna[]
  first = 0;
  rows = 5;
  metaKey: boolean = true;
  dataSelected!: Cliente;

  constructor(private clientsService: ManageClientsService) {
    this.clientes = clientsService.clientes

  }


  

  ngAfterViewInit() {
    this.clientsService.setTabla(this.table); // Pasa la referencia al servicio
  }

  ngOnInit(): void {
    this.cols = [
      {
        field: "id",
        header: "Id"
      },
      {
        field: "name",
        header: "Nombre"
      },
      {
        field: "lastName",
        header: "Apellido"
      },
      {
        field: "email",
        header: "Correo"
      },
      {
        field: "isActive",
        header: "Activo"
      },
    ]
  }


  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }


  getSeverity(status: string): "success" | "danger" {
    if (status === "Activo") {
      return "success";
    } else {
      return "danger"
    }
  }

  

  onDeleteClient(cliente:Cliente){
      this.clientsService.deleteClient(cliente.id);
      this.clientes=this.clientsService.clientes
      this.clientsService.saveLocalStorage();
      this.swalConfirmClientDeleted.fire();
      
  }



}
