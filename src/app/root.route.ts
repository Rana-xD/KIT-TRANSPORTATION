import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
const APP_ROUTES: Routes = [
    
{path:'', component: LoginComponent},
{path:'dashboard', component: DashboardComponent},
];
export const routing = RouterModule.forRoot(APP_ROUTES);