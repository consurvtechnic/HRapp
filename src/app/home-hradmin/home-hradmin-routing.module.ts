import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeHRadminPage } from './home-hradmin.page';

const routes: Routes = [
  {
    path: '',
    component: HomeHRadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeHRadminPageRoutingModule {}
