import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxEditInlineModule } from 'C:/Users/User/Desktop/HRapp/node_modules/ngx-edit-inline';

import { IonicModule } from '@ionic/angular';

import { StaffPageRoutingModule } from './staff-routing.module';

import { StaffPage } from './staff.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    NgxDatatableModule,
    NgxEditInlineModule,
    RouterModule.forChild([
      {
        path: '',
        component: StaffPage
      }
    ]),
    StaffPageRoutingModule
  ],
  declarations: [StaffPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StaffPageModule {}
