import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DronesPageRoutingModule } from './drones-routing.module';

import { DronesPage } from './drones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DronesPageRoutingModule
  ],
  declarations: [DronesPage]
})
export class DronesPageModule {}
