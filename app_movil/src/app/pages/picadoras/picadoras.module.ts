import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PicadorasPageRoutingModule } from './picadoras-routing.module';

import { PicadorasPage } from './picadoras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PicadorasPageRoutingModule
  ],
  declarations: [PicadorasPage]
})
export class PicadorasPageModule {}
