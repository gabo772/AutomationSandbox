import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table'
import { ManageClientsService } from '../../services/manageclient.service';


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
export class ManageClientsComponent  {

  @ViewChild("dt") table!: Table;
  inputName: string = ""
  
  visibleDialog: boolean = false
  cols!: Column[]
  data: Data[] = [

  ]

  dataSelected!: Data;
  metaKey: boolean = true;


  constructor(private clientesService: ManageClientsService) {
    this.data=clientesService.clientes;
  }

  


 

  save() {
    this.clientesService.saveLocalStorage();
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

  buscarCliente(nombre:string){
    this.data = this.clientesService.searchClient(nombre)
  }


}
