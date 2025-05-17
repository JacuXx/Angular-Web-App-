import { Injectable } from '@angular/core';

export interface MaterialCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  components: MaterialComponent[];
}

export interface MaterialComponent {
  id: string;
  name: string;
  description: string;
  apiUrl: string;
  examples: ComponentExample[];
}

export interface ComponentExample {
  id: string;
  title: string;
  description: string;
  code: string;
}

@Injectable({
  providedIn: 'root'
})
export class MaterialComponentsService {
  private categories: MaterialCategory[] = [
    {
      id: 'form-controls',
      name: 'Controles de Formulario',
      description: 'Componentes que permiten recoger y validar la entrada del usuario.',
      icon: 'input',
      components: [
        {
          id: 'autocomplete',
          name: 'Autocomplete',
          description: 'El autocomplete es un campo de texto normal mejorado con un panel de opciones sugeridas.',
          apiUrl: 'https://material.angular.io/components/autocomplete/api',
          examples: [
            {
              id: 'autocomplete-simple',
              title: 'Autocomplete simple',
              description: 'Un ejemplo de autocomplete básico',
              code: `<form class="example-form">
  <mat-form-field class="example-full-width">
    <input type="text" placeholder="Escoge una opción" matInput [formControl]="myControl" [matAutocomplete]="auto">
    <mat-autocomplete #auto="matAutocomplete">
      <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
        {{option}}
      </mat-option>
    </mat-autocomplete>
  </mat-form-field>
</form>`
            }
          ]
        },
        {
          id: 'checkbox',
          name: 'Checkbox',
          description: 'Los checkboxes permiten al usuario seleccionar varias opciones de un conjunto.',
          apiUrl: 'https://material.angular.io/components/checkbox/api',
          examples: [
            {
              id: 'checkbox-basic',
              title: 'Checkbox básico',
              description: 'Un ejemplo de checkbox básico',
              code: `<mat-checkbox>¡Márcame!</mat-checkbox>`
            }
          ]
        },
        {
          id: 'datepicker',
          name: 'Datepicker',
          description: 'El datepicker permite a los usuarios ingresar una fecha ya sea mediante entrada de texto o eligiendo una fecha del calendario.',
          apiUrl: 'https://material.angular.io/components/datepicker/api',
          examples: [
            {
              id: 'datepicker-basic',
              title: 'Datepicker básico',
              description: 'Un ejemplo de datepicker básico',
              code: `<mat-form-field>
  <input matInput [matDatepicker]="picker" placeholder="Elige una fecha">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>`
            }
          ]
        },
        {
          id: 'form-field',
          name: 'Form Field',
          description: 'Los form fields envuelven elementos de entrada y proporcionan funciones de estilo y diseño.',
          apiUrl: 'https://material.angular.io/components/form-field/api',
          examples: [
            {
              id: 'form-field-basic',
              title: 'Form field básico',
              description: 'Un ejemplo de form field básico',
              code: `<mat-form-field>
  <mat-label>Ingresa tu nombre</mat-label>
  <input matInput>
</mat-form-field>`
            }
          ]
        },
        {
          id: 'input',
          name: 'Input',
          description: 'Input es una directiva que permite que los elementos nativos <input> y <textarea> funcionen con <mat-form-field>.',
          apiUrl: 'https://material.angular.io/components/input/api',
          examples: [
            {
              id: 'input-basic',
              title: 'Input básico',
              description: 'Un ejemplo de input básico',
              code: `<mat-form-field>
  <mat-label>Comida favorita</mat-label>
  <input matInput placeholder="Ej. Pizza">
</mat-form-field>`
            }
          ]
        },
        {
          id: 'radio-button',
          name: 'Radio Button',
          description: 'Los radio buttons permiten al usuario seleccionar una opción de un conjunto.',
          apiUrl: 'https://material.angular.io/components/radio/api',
          examples: [
            {
              id: 'radio-basic',
              title: 'Radio buttons básicos',
              description: 'Un ejemplo de radio button básico',
              code: `<mat-radio-group>
  <mat-radio-button value="1">Opción 1</mat-radio-button>
  <mat-radio-button value="2">Opción 2</mat-radio-button>
</mat-radio-group>`
            }
          ]
        },
        {
          id: 'select',
          name: 'Select',
          description: 'Select permite a los usuarios seleccionar un valor de un conjunto de opciones.',
          apiUrl: 'https://material.angular.io/components/select/api',
          examples: [
            {
              id: 'select-basic',
              title: 'Select básico',
              description: 'Un ejemplo de select básico',
              code: `<mat-form-field>
  <mat-label>Comida favorita</mat-label>
  <mat-select>
    <mat-option value="pizza">Pizza</mat-option>
    <mat-option value="hamburguesa">Hamburguesa</mat-option>
    <mat-option value="tacos">Tacos</mat-option>
  </mat-select>
</mat-form-field>`
            }
          ]
        }
      ]
    },
    {
      id: 'navigation',
      name: 'Navegación',
      description: 'Componentes que ayudan en la navegación a través de la aplicación.',
      icon: 'navigation',
      components: [
        {
          id: 'menu',
          name: 'Menu',
          description: 'Los menús muestran una lista de opciones en superficies temporales.',
          apiUrl: 'https://material.angular.io/components/menu/api',
          examples: [
            {
              id: 'menu-basic',
              title: 'Menú básico',
              description: 'Un ejemplo de menú básico',
              code: `<button mat-button [matMenuTriggerFor]="menu">Menú</button>
<mat-menu #menu="matMenu">
  <button mat-menu-item>Elemento 1</button>
  <button mat-menu-item>Elemento 2</button>
</mat-menu>`
            }
          ]
        },
        {
          id: 'sidenav',
          name: 'Sidenav',
          description: 'Sidenav proporciona un contenedor para contenido que está fijo en un borde de la pantalla.',
          apiUrl: 'https://material.angular.io/components/sidenav/api',
          examples: [
            {
              id: 'sidenav-basic',
              title: 'Sidenav básico',
              description: 'Un ejemplo de sidenav básico',
              code: `<mat-sidenav-container>
  <mat-sidenav #sidenav mode="side" opened>Contenido del sidenav</mat-sidenav>
  <mat-sidenav-content>Contenido principal</mat-sidenav-content>
</mat-sidenav-container>`
            }
          ]
        },
        {
          id: 'toolbar',
          name: 'Toolbar',
          description: 'Las toolbars son contenedores para encabezados, títulos o acciones.',
          apiUrl: 'https://material.angular.io/components/toolbar/api',
          examples: [
            {
              id: 'toolbar-basic',
              title: 'Toolbar básica',
              description: 'Un ejemplo de toolbar básica',
              code: `<mat-toolbar>
  <span>Mi Aplicación</span>
</mat-toolbar>`
            }
          ]
        }
      ]
    },
    {
      id: 'layout',
      name: 'Diseño',
      description: 'Componentes que ayudan a organizar el contenido en la página.',
      icon: 'view_quilt',
      components: [
        {
          id: 'card',
          name: 'Card',
          description: 'Las cards contienen contenido y acciones sobre un solo tema.',
          apiUrl: 'https://material.angular.io/components/card/api',
          examples: [
            {
              id: 'card-basic',
              title: 'Card básica',
              description: 'Un ejemplo de card básica',
              code: `<mat-card>
  <mat-card-header>
    <mat-card-title>Título de la Card</mat-card-title>
    <mat-card-subtitle>Subtítulo de la Card</mat-card-subtitle>
  </mat-card-header>
  <mat-card-content>
    <p>El contenido de la card va aquí.</p>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button>ACCIÓN</button>
  </mat-card-actions>
</mat-card>`
            }
          ]
        },
        {
          id: 'divider',
          name: 'Divider',
          description: 'Los dividers son separadores visuales de contenido.',
          apiUrl: 'https://material.angular.io/components/divider/api',
          examples: [
            {
              id: 'divider-basic',
              title: 'Divider básico',
              description: 'Un ejemplo de divider básico',
              code: `<mat-list>
  <mat-list-item>Elemento 1</mat-list-item>
  <mat-divider></mat-divider>
  <mat-list-item>Elemento 2</mat-list-item>
</mat-list>`
            }
          ]
        },
        {
          id: 'tabs',
          name: 'Tabs',
          description: 'Las tabs organizan el contenido en vistas separadas donde solo una vista puede ser visible a la vez.',
          apiUrl: 'https://material.angular.io/components/tabs/api',
          examples: [
            {
              id: 'tabs-basic',
              title: 'Tabs básicas',
              description: 'Un ejemplo de tabs básicas',
              code: `<mat-tab-group>
  <mat-tab label="Primero">Contenido 1</mat-tab>
  <mat-tab label="Segundo">Contenido 2</mat-tab>
  <mat-tab label="Tercero">Contenido 3</mat-tab>
</mat-tab-group>`
            }
          ]
        }
      ]
    },
    {
      id: 'buttons-indicators',
      name: 'Botones e Indicadores',
      description: 'Componentes para la entrada del usuario, acciones e indicadores de estado.',
      icon: 'touch_app',
      components: [
        {
          id: 'button',
          name: 'Button',
          description: 'Un botón interactivo con una variedad de opciones de presentación.',
          apiUrl: 'https://material.angular.io/components/button/api',
          examples: [
            {
              id: 'button-basic',
              title: 'Botones básicos',
              description: 'Ejemplos de botones básicos',
              code: `<button mat-button>Básico</button>
<button mat-raised-button>Elevado</button>
<button mat-stroked-button>Contorno</button>
<button mat-flat-button>Plano</button>
<button mat-icon-button>
  <mat-icon>favorite</mat-icon>
</button>
<button mat-fab>
  <mat-icon>add</mat-icon>
</button>
<button mat-mini-fab>
  <mat-icon>add</mat-icon>
</button>`
            }
          ]
        },
        {
          id: 'progress-spinner',
          name: 'Progress Spinner',
          description: 'El progress spinner es un indicador visual del progreso de un proceso.',
          apiUrl: 'https://material.angular.io/components/progress-spinner/api',
          examples: [
            {
              id: 'progress-spinner-basic',
              title: 'Progress spinner básico',
              description: 'Un ejemplo de progress spinner básico',
              code: `<mat-spinner></mat-spinner>
<mat-progress-spinner [value]="40"></mat-progress-spinner>`
            }
          ]
        },
        {
          id: 'progress-bar',
          name: 'Progress Bar',
          description: 'La progress bar es un indicador visual del progreso de un proceso.',
          apiUrl: 'https://material.angular.io/components/progress-bar/api',
          examples: [
            {
              id: 'progress-bar-basic',
              title: 'Progress bar básica',
              description: 'Un ejemplo de progress bar básica',
              code: `<mat-progress-bar mode="determinate" [value]="40"></mat-progress-bar>
<mat-progress-bar mode="indeterminate"></mat-progress-bar>
<mat-progress-bar mode="buffer" [value]="40" [bufferValue]="60"></mat-progress-bar>`
            }
          ]
        }
      ]
    },
    {
      id: 'popups-modals',
      name: 'Popups y Modales',
      description: 'Componentes que muestran contenido superpuesto en la página actual.',
      icon: 'web_asset',
      components: [
        {
          id: 'dialog',
          name: 'Dialog',
          description: 'Los diálogos informan a los usuarios sobre una tarea y pueden contener información crítica o requerir decisiones.',
          apiUrl: 'https://material.angular.io/components/dialog/api',
          examples: [
            {
              id: 'dialog-basic',
              title: 'Diálogo básico',
              description: 'Un ejemplo de diálogo básico',
              code: `<button mat-button (click)="openDialog()">Abrir diálogo</button>

// En el componente
openDialog() {
  this.dialog.open(DialogComponent);
}

// Componente del diálogo
@Component({
  selector: 'dialog-component',
  template: \`
    <h2 mat-dialog-title>Título del diálogo</h2>
    <mat-dialog-content>Contenido del diálogo</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Cerrar</button>
    </mat-dialog-actions>
  \`
})
export class DialogComponent {}`
            }
          ]
        },
        {
          id: 'snackbar',
          name: 'Snackbar',
          description: 'Los snackbars proporcionan mensajes breves sobre los procesos de la aplicación.',
          apiUrl: 'https://material.angular.io/components/snack-bar/api',
          examples: [
            {
              id: 'snackbar-basic',
              title: 'Snackbar básico',
              description: 'Un ejemplo de snackbar básico',
              code: `<button mat-button (click)="openSnackBar()">Mostrar snackbar</button>

// En el componente
openSnackBar() {
  this.snackBar.open('Mensaje de ejemplo', 'Acción', {
    duration: 2000,
  });
}`
            }
          ]
        },
        {
          id: 'tooltip',
          name: 'Tooltip',
          description: 'Los tooltips proporcionan etiquetas de texto que identifican elementos cuando el usuario coloca el cursor sobre ellos.',
          apiUrl: 'https://material.angular.io/components/tooltip/api',
          examples: [
            {
              id: 'tooltip-basic',
              title: 'Tooltip básico',
              description: 'Un ejemplo de tooltip básico',
              code: `<button mat-raised-button matTooltip="Información del tooltip">Botón con tooltip</button>`
            }
          ]
        }
      ]
    },
    {
      id: 'data-table',
      name: 'Tablas de Datos',
      description: 'Componentes para mostrar y manipular datos tabulares.',
      icon: 'grid_on',
      components: [
        {
          id: 'table',
          name: 'Table',
          description: 'Las tablas muestran conjuntos de datos.',
          apiUrl: 'https://material.angular.io/components/table/api',
          examples: [
            {
              id: 'table-basic',
              title: 'Tabla básica',
              description: 'Un ejemplo de tabla básica',
              code: `<table mat-table [dataSource]="dataSource">
  <!-- Columna de nombre -->
  <ng-container matColumnDef="name">
    <th mat-header-cell *matHeaderCellDef> Nombre </th>
    <td mat-cell *matCellDef="let element"> {{element.name}} </td>
  </ng-container>

  <!-- Columna de peso -->
  <ng-container matColumnDef="weight">
    <th mat-header-cell *matHeaderCellDef> Peso </th>
    <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>`
            }
          ]
        },
        {
          id: 'paginator',
          name: 'Paginator',
          description: 'El paginator proporciona controles de navegación para paginación.',
          apiUrl: 'https://material.angular.io/components/paginator/api',
          examples: [
            {
              id: 'paginator-basic',
              title: 'Paginador básico',
              description: 'Un ejemplo de paginador básico',
              code: `<mat-paginator [length]="100"
              [pageSize]="10"
              [pageSizeOptions]="[5, 10, 25, 100]">
</mat-paginator>`
            }
          ]
        },
        {
          id: 'sort',
          name: 'Sort',
          description: 'El sort proporciona directivas para añadir comportamiento de ordenación a encabezados de tablas.',
          apiUrl: 'https://material.angular.io/components/sort/api',
          examples: [
            {
              id: 'sort-basic',
              title: 'Ordenación básica',
              description: 'Un ejemplo de ordenación básica',
              code: `<table matSort (matSortChange)="sortData($event)">
  <tr>
    <th mat-sort-header="name">Nombre</th>
    <th mat-sort-header="calories">Calorías</th>
  </tr>
  
  <tr *ngFor="let food of sortedData">
    <td>{{food.name}}</td>
    <td>{{food.calories}}</td>
  </tr>
</table>`
            }
          ]
        }
      ]
    }
  ];

  constructor() { }

  getAllCategories(): MaterialCategory[] {
    return this.categories;
  }

  getCategoryById(categoryId: string): MaterialCategory | undefined {
    return this.categories.find(category => category.id === categoryId);
  }

  getComponentById(componentId: string): MaterialComponent | undefined {
    for (const category of this.categories) {
      const component = category.components.find(comp => comp.id === componentId);
      if (component) {
        return component;
      }
    }
    return undefined;
  }

  getCategoryForComponent(componentId: string): MaterialCategory | undefined {
    for (const category of this.categories) {
      const hasComponent = category.components.some(comp => comp.id === componentId);
      if (hasComponent) {
        return category;
      }
    }
    return undefined;
  }
}