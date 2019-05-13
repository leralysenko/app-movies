import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class MyMaterialModule { }
