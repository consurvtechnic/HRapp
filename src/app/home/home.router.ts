import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDataResolver } from '../resolver/userData.resolver';
import { HomePage } from './home.page';
import { HomeGuard } from '../guards/home.guard';


const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    resolve:{
      userData: UserDataResolver
    },
    canActivate: [HomeGuard],
    children: [
        {
        path: 'mukadepan',
        loadChildren: () =>
        import('../pages/mukadepan/mukadepan.module').then(m => m.MukadepanPageModule)
        },

        {
        path: 'applyleave',
        loadChildren: () =>
        import('../pages/applyleave/applyleave.module').then(m => m.ApplyleavePageModule)
        },

        {
        path: 'leavelist',
        loadChildren: () =>
        import('../pages/leave/leave.module').then(m => m.LeavePageModule)
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

  export class HomeRouter{}