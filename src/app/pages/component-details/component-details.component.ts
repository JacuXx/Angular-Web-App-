import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MaterialComponentsService, MaterialCategory, MaterialComponent, ComponentExample } from '../../services/material-components.service';


@Component({
  selector: 'app-component-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatTabsModule
  ],
  template: `
    <div class="component-details-container">
      <div *ngIf="isLoading" class="loading-container">
        <mat-spinner></mat-spinner>
      </div>

      <div *ngIf="!isLoading && component && category" class="component-content">
        <div class="component-header">
          <a class="back-link" [routerLink]="['/category', category.id]">
            <mat-icon>arrow_back</mat-icon>
            <span>Volver a {{category.name}}</span>
          </a>
          
          <h1>{{component.name}}</h1>
          <p class="component-description">{{component.description}}</p>
          
          <div class="component-actions">
            <a mat-raised-button color="primary" [href]="component.apiUrl" target="_blank">
              <mat-icon>code</mat-icon>
              Documentación API
            </a>
          </div>
        </div>
        
        <mat-divider></mat-divider>
        
        <div class="examples-section">
          <h2>Ejemplos</h2>
          
          <div *ngIf="component.examples.length === 0" class="no-examples">
            <p>No hay ejemplos disponibles para este componente.</p>
          </div>
          
          <div *ngFor="let example of component.examples" class="example-card">
            <h3>{{example.title}}</h3>
            <p>{{example.description}}</p>
            
            <mat-card class="code-card">
              <mat-card-content>
                <pre><code>{{example.code}}</code></pre>
              </mat-card-content>
              <mat-card-actions>
                <button mat-button color="primary" (click)="copyToClipboard(example.code)">
                  <mat-icon>content_copy</mat-icon> Copiar código
                </button>
              </mat-card-actions>
            </mat-card>
          </div>
        </div>
      </div>

      <div *ngIf="!isLoading && !component" class="error-container">
        <mat-icon color="warn">error_outline</mat-icon>
        <h2>Componente no encontrado</h2>
        <p>El componente solicitado no existe o no está disponible.</p>
        <button mat-raised-button color="primary" routerLink="/">Volver al inicio</button>
      </div>
    </div>
  `,
  styles: [`
    .component-details-container {
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

    .back-link {
      display: flex;
      align-items: center;
      color: rgba(0, 0, 0, 0.6);
      margin-bottom: 16px;
      text-decoration: none;
      font-weight: 500;
      
      mat-icon {
        margin-right: 8px;
      }
    }

    .component-header {
      margin: 24px 0;
      
      h1 {
        margin: 8px 0;
        font-size: 2.5rem;
        font-weight: 300;
      }
    }

    .component-description {
      font-size: 1.1rem;
      color: rgba(0, 0, 0, 0.6);
      margin-bottom: 24px;
    }

    .component-actions {
      margin-bottom: 24px;
    }

    .examples-section {
      margin: 32px 0;
      
      h2 {
        font-size: 1.5rem;
        font-weight: 400;
        margin-bottom: 24px;
      }
    }

    .example-card {
      margin-bottom: 48px;
      
      h3 {
        font-size: 1.25rem;
        font-weight: 500;
        margin: 0 0 8px 0;
      }
      
      p {
        margin: 0 0 16px 0;
        color: rgba(0, 0, 0, 0.6);
      }
    }

    .code-card {
      background-color: #f5f5f5;
      
      pre {
        margin: 0;
        overflow-x: auto;
      }
      
      code {
        border-radius: 4px;
        font-family: 'Roboto Mono', monospace;
      }
    }

    .no-examples {
      background-color: #f5f5f5;
      padding: 32px;
      border-radius: 4px;
      text-align: center;
      color: rgba(0, 0, 0, 0.6);
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
      .component-header h1 {
        font-size: 2rem;
      }
    }
  `]
})
export class ComponentDetailsComponent implements OnInit {
  component: MaterialComponent | undefined;
  category: MaterialCategory | undefined;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private componentsService: MaterialComponentsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const componentId = params.get('id');
      if (componentId) {
        // Simulamos una carga con un pequeño retraso para una mejor experiencia de usuario
        setTimeout(() => {
          this.component = this.componentsService.getComponentById(componentId);
          
          if (this.component) {
            this.category = this.componentsService.getCategoryForComponent(componentId);
          }
          
          this.isLoading = false;
        }, 500);
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  copyToClipboard(code: string): void {
    navigator.clipboard.writeText(code)
      .then(() => {
        // En una aplicación real, aquí podríamos mostrar un snackbar o una notificación
        console.log('Código copiado al portapapeles');
      })
      .catch(err => {
        console.error('Error al copiar: ', err);
      });
  }
}