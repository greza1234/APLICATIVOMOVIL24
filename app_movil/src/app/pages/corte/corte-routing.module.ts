import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CortePage } from './corte.page';

const routes: Routes = [
  {
    path: '',
    component: CortePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CortePageRoutingModule {}
