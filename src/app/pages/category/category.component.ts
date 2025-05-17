import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MaterialComponentsService, MaterialCategory, MaterialComponent } from '../../services/material-components.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ],
  template: `
    <div class="category-container">
      <div *ngIf="isLoading" class="loading-container">
        <mat-spinner></mat-spinner>
      </div>

      <div *ngIf="!isLoading && category" class="category-content">
        <div class="category-header">
          <mat-icon color="primary">{{category.icon}}</mat-icon>
          <h1>{{category.name}}</h1>
        </div>
        
        <p class="category-description">{{category.description}}</p>
        
        <mat-divider></mat-divider>
        
        <div class="components-grid">
          <mat-card *ngFor="let component of category.components" class="component-card" 
                   [routerLink]="['/component', component.id]">
            <mat-card-header>
              <mat-card-title>{{component.name}}</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p>{{component.description}}</p>
            </mat-card-content>
            <mat-card-actions>
              <button mat-button color="primary">VER DETALLES</button>
              <a mat-button color="accent" [href]="component.apiUrl" target="_blank">API</a>
            </mat-card-actions>
          </mat-card>
        </div>
      </div>

      <div *ngIf="!isLoading && !category" class="error-container">
        <mat-icon color="warn">error_outline</mat-icon>
        <h2>Categoría no encontrada</h2>
        <p>La categoría solicitada no existe o no está disponible.</p>
        <button mat-raised-button color="primary" routerLink="/">Volver al inicio</button>
      </div>
    </div>
  `,
  styles: [`
    .category-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 16px;
    }

    .loading-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 400px;
    }

    .category-header {
      display: flex;
      align-items: center;
      margin: 24px 0;
      
      mat-icon {
        font-size: 40px;
        width: 40px;
        height: 40px;
        margin-right: 16px;
      }
      
      h1 {
        margin: 0;
        font-size: 2.5rem;
        font-weight: 300;
      }
    }

    .category-description {
      font-size: 1.1rem;
      color: rgba(0, 0, 0, 0.6);
      margin-bottom: 24px;
    }

    .components-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 24px;
      padding: 24px 0;
    }

    .component-card {
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .component-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }

    .error-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 400px;
      text-align: center;
      
      mat-icon {
        font-size: 64px;
        width: 64px;
        height: 64px;
        margin-bottom: 16px;
      }
      
      h2 {
        margin: 0 0 8px;
        font-size: 1.5rem;
      }
      
      p {
        margin-bottom: 24px;
        color: rgba(0, 0, 0, 0.6);
      }
    }

    @media (max-width: 768px) {
      .components-grid {
        grid-template-columns: 1fr;
      }
      
      .category-header h1 {
        font-size: 2rem;
      }
    }
  `]
})
export class CategoryComponent implements OnInit {
  category: MaterialCategory | undefined;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private componentsService: MaterialComponentsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryId = params.get('id');
      if (categoryId) {
        // Simulamos una carga con un pequeño retraso para una mejor experiencia de usuario
        setTimeout(() => {
          this.category = this.componentsService.getCategoryById(categoryId);
          this.isLoading = false;
        }, 500);
      } else {
        this.router.navigate(['/']);
      }
    });
  }
}