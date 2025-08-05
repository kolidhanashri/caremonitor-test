import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';

export const routes: Routes = [
    { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
    { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [authGuard] },
    { path: 'list', loadChildren: () => import('./features/list/list.module').then(m => m.ListModule), canActivate: [authGuard] },
    { path: '**', redirectTo: 'login' },
];

