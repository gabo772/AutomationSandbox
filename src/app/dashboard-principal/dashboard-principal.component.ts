import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard-principal',
  templateUrl: './dashboard-principal.component.html',
  styles: ``
})
export class DashboardPrincipalComponent implements OnInit {

  public items: MenuItem[] | undefined;

  constructor(private router: Router) { }


  exit() {
    this.router.navigate(["login"])
  }

  ngOnInit(): void {
    this.items = [
      {
        label: "Inicio",
        icon: "pi pi-home",
        command: () => this.router.navigate(["inicio"])
      },
      {
        label: "Clientes",
        icon: "pi pi-users",
        items: [
          {
            label: "Gestionar",
            command: () => this.router.navigate(["inicio/clientes"])
          },


        ]
      },
    ]
  }



}
