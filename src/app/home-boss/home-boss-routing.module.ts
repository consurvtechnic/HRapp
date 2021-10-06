import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeBossPage } from './home-boss.page';

const routes: Routes = [
  {
    path: '',
    component: HomeBossPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeBossPageRoutingModule {}
