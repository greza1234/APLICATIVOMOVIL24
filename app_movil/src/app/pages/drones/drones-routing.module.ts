import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DronesPage } from './drones.page';

const routes: Routes = [
  {
    path: '',
    component: DronesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DronesPageRoutingModule {}
