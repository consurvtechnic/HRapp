import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeHRadminPageRoutingModule } from './home-hradmin-routing.module';

import { HomeHRadminPage } from './home-hradmin.page';
import { HomeAdminRouter } from './home-hradmin.router'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeAdminRouter,
    HomeHRadminPageRoutingModule
  ],
  declarations: [HomeHRadminPage]
})
export class HomeHRadminPageModule {}
