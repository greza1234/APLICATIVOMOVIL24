import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MolinoPage } from './molino.page';

const routes: Routes = [
  {
    path: '',
    component: MolinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MolinoPageRoutingModule {}
