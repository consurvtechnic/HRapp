import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDataResolver } from '../resolver/userData.resolver';
import { HomeHRadminPage } from './home-hradmin.page';

const routes: Routes = [
  {
    path: 'home-hradmin',
    component: HomeHRadminPage,
    resolve:{
      userData: UserDataResolver
    },

    children: [
        {
        path: 'mukadepan',
        loadChildren: () =>
        import('../pages/mukadepan/mukadepan.module').then(m => m.MukadepanPageModule)
        },
        {
        path: 'mukadepanadmin',
        loadChildren: () =>
        import('../pages/mukadepan-admin/mukadepan-admin.module').then(m => m.MukadepanAdminPageModule)
        },
        {
        path: 'applyleave',
        loadChildren: () =>
        import('../pages/applyleave/applyleave.module').then(m => m.ApplyleavePageModule)
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

  export class HomeAdminRouter{}