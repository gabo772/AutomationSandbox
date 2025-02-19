import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table'
import { Cliente } from '../../interfaces/Cliente';
import { ManageClientsService } from '../../services/manageclient.service';
import Swal from 'sweetalert2'


interface Column {
  field: string;
  header: string;
}

interface Data {
  id: number;
  name: string;
  lastName: string;
  email: string;
  isActive: string;

}

@Component({
  selector: 'app-manage-clients',
  templateUrl: './manage-clients.component.html',
  styles: ``
})
export class ManageClientsComponent implements OnInit {

  @ViewChild("dt") table!: Table;
  inputName: string = ""
  inputLastName: string = ""
  inputEmail: string = ""
  inputStatus: string = "Activo"


  first: number = 0;
  rows: number = 5;

  states: string[] = ["Activo", "Inactivo"]

  visibleDialog: boolean = false
  cols!: Column[]
  data: Data[] = [

  ]

  dataSelected!: Data;
  metaKey: boolean = true;


  constructor(private clientesService: ManageClientsService) {
    if (localStorage.getItem("clients")) {
      this.data = JSON.parse(localStorage.getItem("clients")!)
    }
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
    this.first = event.first
    this.rows = event.rows
  }

  getSeverity(status: string): "success" | "danger" {
    if (status === "Activo") {
      return "success";
    } else {
      return "danger"
    }
  }

  agregarCliente() {
    let id;
    if (localStorage.getItem("lastClientId")) {
      id = Number.parseInt(localStorage.getItem("lastClientId")!) + 1
    } else {
      id = 1;
    }
    localStorage.setItem("lastClientId", id.toString())

    let cliente = {
      id: id,
      name: this.inputName,
      lastName: this.inputLastName,
      email: this.inputEmail,
      isActive: this.inputStatus
    }
    this.clientesService.addCliente(cliente)


    this.cleanInputs()

  }

  save() {
    localStorage.setItem("clients", JSON.stringify(this.data))
  }

  cleanInputs() {
    this.inputName = ""
    this.inputLastName = ""
    this.inputEmail = ""
    this.inputStatus = "Activo"
  }

  showDialog() {
    this.visibleDialog = true
  }

  clean() {
    localStorage.clear();
  }

  onVisibleChanged(visible: boolean) {
    this.visibleDialog = visible
  }


}
