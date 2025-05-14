import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from '../theme-service.service';
import { Router } from '@angular/router'


interface Usuario {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './style-login.scss'
})
export class LoginComponent implements OnInit {

  inputUsername: string = ""
  inputPassword: string = ""
  existenUsuarios: boolean = false
  credencialesIncorrectas: boolean = false
  message: string = ""
  mostrarMensaje: boolean = false

  public checked: boolean = false;
  public text: string = "Dark";
  loader: boolean = false;

  constructor(private themeService: ThemeServiceService, private router: Router) {
    if (localStorage.getItem("dark") === 'true') {
      this.checked = true
    } else {
      this.checked = false
    }
  }
  ngOnInit(): void {

  }

  onChangeTheme(theme: string) {
    //this.themeService.switchTheme(theme)
    if (this.checked) {
      localStorage.setItem("dark", "true")
      this.themeService.switchTheme("bootstrap-dark-purple")
    } else {
      localStorage.setItem("dark", "false")
      this.themeService.switchTheme("bootstrap-light-purple")
    }
  }

  areThereUsers(): boolean {
    return localStorage.getItem("usuarios") ? true : false
  }

  validarUsuario(): boolean {
    let usuarios: Usuario[] = JSON.parse(localStorage.getItem("usuarios")!);
    return usuarios.some(user => user.username == this.inputUsername && user.password == this.inputPassword)
  }


  goToRegister(): void {
    this.router.navigate(["registro"])
  }


  goToDashboard(): void {

    if (this.areThereUsers()) {
      this.loader = true
      setTimeout(() => {

        if (this.validarUsuario()) {

          this.router.navigate(["inicio"])
        } else {
          this.mostrarMensaje = true;
          this.message = "Credenciales incorrectas, por favor intente nuevamente"
          setTimeout(() => {
            this.mostrarMensaje = false
          }, 5000)
          //credenciales incorrectas
        }
        this.loader = false

      }, 3000)
    } else {
      this.mostrarMensaje = true;
      this.message = "NO EXISTEN USUARIOS, CREA UNO YA ! ";
      setTimeout(() => {
        this.mostrarMensaje = false
      }, 5000)

    }


  }




}
