import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import {AuthUser} from './main.guard';
import {DASHBORAD_CHILD} from './dashboard/dashboard-child.route';
const APP_ROUTES: Routes = [
	
	{path:'', component: LoginComponent},
	{path:'dashboard', component: DashboardComponent, canActivate:[AuthUser]},
	{path:'dashboard', component: DashboardComponent,children: DASHBORAD_CHILD, canActivate:[AuthUser]}
	
];
export const routing = RouterModule.forRoot(APP_ROUTES);