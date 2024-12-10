import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AradoPage } from './arado.page';

const routes: Routes = [
  {
    path: '',
    component: AradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AradoPageRoutingModule {}
