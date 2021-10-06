import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeBossPageRoutingModule } from './home-boss-routing.module';

import { HomeBossPage } from './home-boss.page';
import { HomeBossRouter } from './home-boss.router'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeBossPageRoutingModule,
    HomeBossRouter
  ],
  declarations: [HomeBossPage]
})
export class HomeBossPageModule {}
