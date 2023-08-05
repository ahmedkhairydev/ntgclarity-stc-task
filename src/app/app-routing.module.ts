import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/components';
import { authGuard, userGuard, adminGuard, loginGuard } from './core/guards';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        canActivate: [userGuard],
        loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'admin',
        canActivate: [adminGuard],
        loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule),
      }
    ]
  },
  {
    path: 'login',
    canActivate: [loginGuard],
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
  },
  { path: 'error', loadChildren: () => import('./features/error/error.module').then(m => m.ErrorModule) },
  { path: '**', redirectTo: '/error/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
