import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrimengComponentsModule } from './primeng-components/primeng-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardPrincipalModule } from './dashboard-principal/dashboard-principal.module';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent,
    RegistrarUsuarioComponent
  ],
  imports: [

    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimengComponentsModule,
    DashboardPrincipalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
