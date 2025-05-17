import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'category/:id', loadComponent: () => import('./pages/category/category.component').then(m => m.CategoryComponent) },
  { path: 'component/:id', loadComponent: () => import('./pages/component-details/component-details.component').then(m => m.ComponentDetailsComponent) },
  { path: '**', redirectTo: 'home' }
];