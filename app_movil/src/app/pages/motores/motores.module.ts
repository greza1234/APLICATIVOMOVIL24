import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotoresPageRoutingModule } from './motores-routing.module';

import { MotoresPage } from './motores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotoresPageRoutingModule
  ],
  declarations: [MotoresPage]
})
export class MotoresPageModule {}
