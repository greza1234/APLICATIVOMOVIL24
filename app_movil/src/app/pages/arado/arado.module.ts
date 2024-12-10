import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AradoPageRoutingModule } from './arado-routing.module';

import { AradoPage } from './arado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AradoPageRoutingModule
  ],
  declarations: [AradoPage]
})
export class AradoPageModule {}
