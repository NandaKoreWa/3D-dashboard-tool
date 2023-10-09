import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./core/guards/auth-guard.service";
const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'materiales',
    loadChildren: () => import('./modules/materiales/materiales.module').then(m => m.MaterialesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'encargos',
    loadChildren: () => import('./modules/encargos/encargos.module').then(m => m.EncargosModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'clientes',
    loadChildren: () => import('./modules/clientes/clientes.module').then(m => m.ClientesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
