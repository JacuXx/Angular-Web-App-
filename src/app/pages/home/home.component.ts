import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule
  ],
  template: `
    <div class="home-container">
      <div class="hero-section">
        <h1 class="mat-headline-2">Catálogo de Componentes Angular Material</h1>
        <p class="mat-subtitle-1">Una guía completa de los componentes de la librería Angular Material organizados por categorías.</p>
      </div>

      <mat-divider></mat-divider>

      <div class="categories-grid">
        <mat-card routerLink="/category/form-controls" class="category-card">
          <mat-card-header>
            <mat-icon mat-card-avatar color="primary">input</mat-icon>
            <mat-card-title>Controles de Formulario</mat-card-title>
            <mat-card-subtitle>Autocomplete, Checkbox, DatePicker, y más</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Componentes que permiten recoger y validar la entrada del usuario.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">EXPLORAR</button>
          </mat-card-actions>
        </mat-card>

        <mat-card routerLink="/category/navigation" class="category-card">
          <mat-card-header>
            <mat-icon mat-card-avatar color="primary">navigation</mat-icon>
            <mat-card-title>Navegación</mat-card-title>
            <mat-card-subtitle>Menu, Sidenav, Toolbar, y más</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Componentes que ayudan en la navegación a través de la aplicación.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">EXPLORAR</button>
          </mat-card-actions>
        </mat-card>

        <mat-card routerLink="/category/layout" class="category-card">
          <mat-card-header>
            <mat-icon mat-card-avatar color="primary">view_quilt</mat-icon>
            <mat-card-title>Diseño</mat-card-title>
            <mat-card-subtitle>Card, Divider, List, Tabs, y más</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Componentes que ayudan a organizar el contenido en la página.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">EXPLORAR</button>
          </mat-card-actions>
        </mat-card>

        <mat-card routerLink="/category/buttons-indicators" class="category-card">
          <mat-card-header>
            <mat-icon mat-card-avatar color="primary">touch_app</mat-icon>
            <mat-card-title>Botones e Indicadores</mat-card-title>
            <mat-card-subtitle>Button, Icon, Progress, Badge, y más</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Componentes para la entrada del usuario, acciones e indicadores de estado.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">EXPLORAR</button>
          </mat-card-actions>
        </mat-card>

        <mat-card routerLink="/category/popups-modals" class="category-card">
          <mat-card-header>
            <mat-icon mat-card-avatar color="primary">web_asset</mat-icon>
            <mat-card-title>Popups y Modales</mat-card-title>
            <mat-card-subtitle>Dialog, Snackbar, Tooltip, y más</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Componentes que muestran contenido superpuesto en la página actual.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">EXPLORAR</button>
          </mat-card-actions>
        </mat-card>

        <mat-card routerLink="/category/data-table" class="category-card">
          <mat-card-header>
            <mat-icon mat-card-avatar color="primary">grid_on</mat-icon>
            <mat-card-title>Tablas de Datos</mat-card-title>
            <mat-card-subtitle>Table, Paginator, Sort, y más</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Componentes para mostrar y manipular datos tabulares.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">EXPLORAR</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .hero-section {
      text-align: center;
      padding: 40px 20px;
    }

    .mat-headline-2 {
      margin-bottom: 16px;
      font-weight: 300;
      font-size: 2.5rem;
    }

    .mat-subtitle-1 {
      max-width: 600px;
      margin: 0 auto;
      opacity: 0.8;
      font-size: 1.1rem;
    }

    .categories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 24px;
      padding: 40px 16px;
    }

    .category-card {
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .category-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
      .categories-grid {
        grid-template-columns: 1fr;
      }
      
      .mat-headline-2 {
        font-size: 2rem;
      }
    }
  `]
})
export class HomeComponent {}