import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import {AuthUser} from './main.guard';
const APP_ROUTES: Routes = [
	
	{path:'', component: LoginComponent},
	{path:'dashboard', component: DashboardComponent, canActivate:[AuthUser]}
	
];
export const routing = RouterModule.forRoot(APP_ROUTES);