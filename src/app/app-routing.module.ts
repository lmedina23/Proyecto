import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './producto/producto.component';


const routes: Routes = [];
export const AppRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'producto', component: ProductoComponent},
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes); 