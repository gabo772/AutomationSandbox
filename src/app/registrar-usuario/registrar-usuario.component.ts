import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface User {
  username: string;
  password: string;
}


@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styles: ``
})
export class RegistrarUsuarioComponent {

  usuarios: User[] = []
  inputUsername: string = "";
  inputPassword: string = "";

  constructor(private router: Router) { }

  goToLogin() {
    this.router.navigate(["login"])
  }


  registerUser() {
    if (localStorage.getItem("usuarios")) {
      this.usuarios = JSON.parse(localStorage.getItem("usuarios")!)
    }
    let user = { username: this.inputUsername, password: this.inputPassword }
    this.usuarios.push(user)
    localStorage.setItem("usuarios", JSON.stringify(this.usuarios))
    this.goToLogin()
  }

}
