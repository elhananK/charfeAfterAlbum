import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';

const exports = [
  MatButtonModule,
  MatListModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
];

const imports = [
  ...exports
];

@NgModule({
  imports, exports,
})
export class AngularMaterialModule {}
