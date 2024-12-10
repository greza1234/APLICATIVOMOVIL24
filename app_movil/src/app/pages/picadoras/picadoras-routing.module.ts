import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PicadorasPage } from './picadoras.page';

const routes: Routes = [
  {
    path: '',
    component: PicadorasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PicadorasPageRoutingModule {}
