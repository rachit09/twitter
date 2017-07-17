import {  RouterModule, Route } from '@angular/router';
import {User2Component} from './user2/user2.component'
import {User1Component} from './user1/user1.component';

const routes : Route[] = [
  {path: '', redirectTo: '/user1', pathMatch:'full'},
  {path: 'user1', component: User1Component},
  {path: 'user2', component: User2Component}
];

export const RoutesProvider = RouterModule.forRoot(routes);