import { NgModule } from '@angular/core';
import {MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule,
  MatListModule, MatDividerModule, MatToolbarModule, MatSidenavModule} from '@angular/material';

@NgModule({
  imports: [MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule,
    MatListModule, MatDividerModule, MatToolbarModule, MatSidenavModule],
  exports: [MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule,
    MatListModule, MatDividerModule, MatToolbarModule, MatSidenavModule],
})
export class MaterialModule { }