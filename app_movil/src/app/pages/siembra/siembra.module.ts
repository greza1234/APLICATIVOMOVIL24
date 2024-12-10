import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiembraPageRoutingModule } from './siembra-routing.module';

import { SiembraPage } from './siembra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiembraPageRoutingModule
  ],
  declarations: [SiembraPage]
})
export class SiembraPageModule {}
