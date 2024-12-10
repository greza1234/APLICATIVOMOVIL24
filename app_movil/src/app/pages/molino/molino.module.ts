import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MolinoPageRoutingModule } from './molino-routing.module';

import { MolinoPage } from './molino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MolinoPageRoutingModule
  ],
  declarations: [MolinoPage]
})
export class MolinoPageModule {}
