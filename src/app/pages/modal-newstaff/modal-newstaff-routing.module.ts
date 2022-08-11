import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalNewstaffPage } from './modal-newstaff.page';

const routes: Routes = [
  {
    path: '',
    component: ModalNewstaffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalNewstaffPageRoutingModule {}
