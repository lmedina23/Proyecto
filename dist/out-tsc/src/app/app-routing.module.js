import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
var routes = [];
export var AppRoutes = [
    { path: 'home', component: HomeComponent },
    { path: '', component: LoginComponent },
];
export var ROUTING = RouterModule.forRoot(AppRoutes);
//# sourceMappingURL=app-routing.module.js.map