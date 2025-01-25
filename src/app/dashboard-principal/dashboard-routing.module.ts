import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPrincipalComponent } from './dashboard-principal.component';
import { ManageClientsComponent } from './pages/manage-clients/manage-clients.component';


const routes: Routes = [
    {
        path: "",
        component: DashboardPrincipalComponent,
        children: [
            {
                path: "clientes",
                component: ManageClientsComponent
            }
        ],

    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
