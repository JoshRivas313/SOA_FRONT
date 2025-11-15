// 📌 src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'panel',
    pathMatch: 'full'
  },

  {
    path: 'panel',
    loadComponent: () =>
      import('./panel/panel.component').then(m => m.PanelComponent)
  },


  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then(m => m.LoginComponent)
  },


  {
    path: 'register',
    loadComponent: () =>
      import('./register/register.component').then(m => m.RegisterComponent)
  },


  {
    path: '**',
    redirectTo: 'panel'
  }


];
