import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDataResolver } from '../resolver/userData.resolver';
import { HomeBossPage } from './home-boss.page';

const routes: Routes = [
  {
    path: 'home-boss',
    component: HomeBossPage,
    resolve:{
      userData: UserDataResolver
    },

    children: [
        {
        path: 'mukadepan',
        loadChildren: () =>
        import('../pages/mukadepan-hod/mukadepan-hod.module').then(m => m.MukadepanHodPageModule)
        },

        {
        path: 'leaveapproval',
        loadChildren: () =>
        import('../pages/leaveapproval/leaveapproval.module').then(m => m.LeaveapprovalPageModule)
        },

        {
        path: 'leavelist',
        loadChildren: () =>
        import('../pages/leavelist/leavelist.module').then(m => m.LeavelistPageModule)
        },

        {
        path: 'calendar',
        loadChildren: () =>
        import('../pages/calendar/calendar.module').then(m => m.CalendarPageModule)
        },

        {
        path: 'setting',
        loadChildren: () =>
        import('../pages/setting/setting.module').then(m => m.SettingPageModule)
        },
        ]
  }
];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class HomeBossRouter{}