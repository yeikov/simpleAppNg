import { NgModule } from '@angular/core';
import {MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule,
  MatListModule, MatDividerModule, MatToolbarModule, MatSidenavModule} from '@angular/material';

  import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
  imports: [
    MatGridListModule, 
    MatCardModule, 
    MatMenuModule, 
    MatIconModule, 
    MatButtonModule,
    MatListModule, 
    MatDividerModule, 
    MatToolbarModule, 
    MatSidenavModule,
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule

  ],
  exports: [
    MatGridListModule, 
    MatCardModule, 
    MatMenuModule, 
    MatIconModule, 
    MatButtonModule,
    MatListModule, 
    MatDividerModule, 
    MatToolbarModule, 
    MatSidenavModule,
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule


  ],
})
export class MaterialModule { }