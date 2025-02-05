import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () =>
          import(
            './dashboard/pages/change-detection/change-detection.component'
          ),
      },
      {
        path: 'control-flow',
        title: 'control flow',
        loadComponent: () =>
          import('./dashboard/pages/control-flow/control-flow.component'),
      },
      {
        path: 'defer-option',
        title: 'defer option',
        loadComponent: () =>
          import('./dashboard/pages/defer-option/defer-option.component'),
      },
      {
        path: 'defer-views',
        title: 'Defer Views',
        loadComponent: () =>
          import('./dashboard/pages/defer-views/defer-views.component'),
      },
      {
        path: 'user/:id',
        title: 'user',
        loadComponent: () => import('./dashboard/pages/user/user.component'),
      },
      {
        path: 'list-users',
        title: 'List users',
        loadComponent: () => import('./dashboard/pages/users/users.component'),
      },
      {
        path: 'view-transition1',
        title: 'viwe transition1',
        loadComponent: () =>
          import('./dashboard/pages/view-transition/view-transition1.component'),
      },
      {
        path: 'view-transition2',
        title: 'viwe transition2',
        loadComponent: () =>
          import('./dashboard/pages/view-transition/view-transition2.component'),
      },
      {
        path: 'input-output',
        title: 'Input Outputs',
        loadComponent: () =>
          import('./dashboard/pages/input-output/input-output.component'),
      },
      {
        path: 'material',
        title: 'material',
        loadComponent: () =>
          import('./dashboard/pages/material/material.component'),
      },
      {
        path: '',
        redirectTo: 'control-flow',
        pathMatch: 'full'
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];
