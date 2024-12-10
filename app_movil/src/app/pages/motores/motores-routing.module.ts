import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotoresPage } from './motores.page';

const routes: Routes = [
  {
    path: '',
    component: MotoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotoresPageRoutingModule {}
