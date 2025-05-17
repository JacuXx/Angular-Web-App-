import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

import { MaterialComponentsService, MaterialCategory } from './services/material-components.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule
  ],
  template: `
    <div class="app-container">
      <mat-toolbar color="primary" class="app-toolbar">
        <button mat-icon-button (click)="toggleSidenav()">
          <mat-icon>menu</mat-icon>
        </button>
        <span routerLink="/" class="app-title">Catálogo Angular Material</span>
        <span class="spacer"></span>
        <a mat-button href="https://material.angular.io" target="_blank">
          <mat-icon>open_in_new</mat-icon>
          Web Oficial
        </a>
      </mat-toolbar>

      <mat-sidenav-container class="sidenav-container">
        <mat-sidenav #sidenav mode="over" [opened]="sidenavOpen" class="app-sidenav">
          <mat-nav-list>
            <h2 matSubheader>Categorías</h2>
            
            <a mat-list-item routerLink="/" (click)="sidenav.close(); sidenavOpen = false">
              <mat-icon>home</mat-icon>
              <span class="nav-item-text">Inicio</span>
            </a>
            
            <a mat-list-item *ngFor="let category of categories" 
               [routerLink]="['/category', category.id]" 
               (click)="sidenav.close(); sidenavOpen = false">
              <mat-icon>{{category.icon}}</mat-icon>
              <span class="nav-item-text">{{category.name}}</span>
            </a>
          </mat-nav-list>
        </mat-sidenav>

        <mat-sidenav-content class="sidenav-content">
          <router-outlet></router-outlet>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .app-toolbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 2;
    }

    .app-title {
      cursor: pointer;
      margin-left: 8px;
    }

    .spacer {
      flex: 1 1 auto;
    }

    .sidenav-container {
      flex: 1;
      margin-top: 64px; /* Altura del toolbar */
    }

    .app-sidenav {
      width: 280px;
    }

    .nav-item-text {
      margin-left: 8px;
    }

    .sidenav-content {
      padding: 16px;
    }

    /* Para dispositivos móviles */
    @media (max-width: 599px) {
      .sidenav-container {
        margin-top: 56px; /* Altura del toolbar en móvil */
      }
    }
  `]
})
export class AppComponent {
  title = 'Catálogo Angular Material';
  categories: MaterialCategory[];
  sidenavOpen = false;

  constructor(private componentsService: MaterialComponentsService) {
    this.categories = this.componentsService.getAllCategories();
  }

  toggleSidenav() {
    this.sidenavOpen = !this.sidenavOpen;
  }
}