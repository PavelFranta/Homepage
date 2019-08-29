import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  exports: [
    MatCardModule,
    MatMenuModule,
    MatIconModule
  ],
  declarations: []
})
export class MaterialModule { }
