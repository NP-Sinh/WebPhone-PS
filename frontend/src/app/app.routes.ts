import { Routes } from '@angular/router';
import { Main } from './share/main/main';
import { VaiTro } from './view/admin/vaitro/vaitro';

export const routes: Routes = [
  // {
  //   path: 'login',
  //   component: Login,
  // },
  {
    path: '',
    component: Main,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'vaitro',
        component: VaiTro,
      },
    ],
  },
];
