import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/Cliente';
import { Table } from 'primeng/table';

@Injectable({
    providedIn: 'root'
})
export class ManageClientsService {

    clientes!: Cliente[]
    tabla!: Table;

    constructor() {
        if (localStorage.getItem("clients")) {
            this.clientes = JSON.parse(localStorage.getItem("clients")!)
        }
    }

    addCliente(cliente: Cliente) {
        let currentPage = this.tabla.first
        this.clientes.push({ ...cliente })
        if (this.tabla) {
            this.tabla.reset();
            this.tabla.first = currentPage
        }

    }

    setTabla(table: Table) {
        this.tabla = table;
    }

}
