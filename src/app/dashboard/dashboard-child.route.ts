import {Routes} from "@angular/router";
import {RegisterbusComponent} from './registerbus.component';
import {UserticketsComponent} from "./usertickets.component";
import {HistoryComponent} from "./history.component";
import {ReportsComponent} from "./reports.component";
import {AccountsComponent} from "./accounts.component";
import {SettingsComponent} from "./settings.component";
export const DASHBORAD_CHILD: Routes =[
     {path: 'registerbus', component: RegisterbusComponent},
     {path: 'usertickets', component: UserticketsComponent },
     {path: 'history', component: HistoryComponent},
     {path: 'report', component:ReportsComponent},
     {path: 'account',component:AccountsComponent},
     {path: 'setting', component:SettingsComponent }
];