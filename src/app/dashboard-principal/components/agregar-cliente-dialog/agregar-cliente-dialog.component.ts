import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { ManageClientsService } from '../../services/manageclient.service';

@Component({
  selector: 'app-agregar-cliente-dialog',
  templateUrl: './agregar-cliente-dialog.component.html',
  styles: ``
})
export class AgregarClienteDialogComponent implements OnChanges, OnDestroy {

  inputName: string = ""
  inputLastName: string = ""
  inputEmail: string = ""
  inputStatus: string = "Activo"

  states: string[] = ["Activo", "Inactivo"]

  @Input()
  visible: boolean = false

  @Output()
  public onVisibleDialogChanged: EventEmitter<boolean> = new EventEmitter();




  constructor(private clientesService: ManageClientsService) {

  }
  ngOnDestroy(): void {
    console.log("se destruyó");

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.visible);

  }

  closeDialog() {
    this.visible = false;
    this.onVisibleDialogChanged.emit(this.visible);
  }


  cleanInputs() {
    this.inputName = ""
    this.inputLastName = ""
    this.inputEmail = ""
    this.inputStatus = "Activo"
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

}
