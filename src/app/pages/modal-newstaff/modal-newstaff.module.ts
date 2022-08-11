import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalNewstaffPageRoutingModule } from './modal-newstaff-routing.module';

import { ModalNewstaffPage } from './modal-newstaff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModalNewstaffPageRoutingModule
  ],
  declarations: [ModalNewstaffPage]
})
export class ModalNewstaffPageModule {}
