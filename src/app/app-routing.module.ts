import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home-hradmin/home-hradmin.module').then( m => m.HomeHRadminPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home-manager/home-manager.module').then( m => m.HomeManagerPageModule)
  },
    {
    path: 'welcome',
    loadChildren: () => import('./components/components.module').then( m => m.ComponentsModule)
  },
  {
    path: 'listattendees',
    loadChildren: () => import('./pages/listattendees/listattendees.module').then( m => m.ListattendeesPageModule)
  },
  {
    path: 'leave-modal',
    loadChildren: () => import('./leave-modal/leave-modal.module').then( m => m.LeaveModalPageModule)
  },
  {
    path: 'approve-modal',
    loadChildren: () => import('./approve-modal/approve-modal.module').then( m => m.ApproveModalPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'cal-modal',
    loadChildren: () => import('./pages/cal-modal/cal-modal.module').then( m => m.CalModalPageModule)
  },
  {
    path: 'leave',
    loadChildren: () => import('./pages/leave/leave.module').then( m => m.LeavePageModule)
  },
  {
    path: 'home-hradmin',
    loadChildren: () => import('./home-hradmin/home-hradmin.module').then( m => m.HomeHRadminPageModule)
  },
{
    path: 'applyleave',
    loadChildren: () => import('./pages/applyleave/applyleave.module').then( m => m.ApplyleavePageModule)
  },
  {
    path: 'mukadepan-admin',
    loadChildren: () => import('./pages/mukadepan-admin/mukadepan-admin.module').then( m => m.MukadepanAdminPageModule)
  },
  {
    path: 'staff',
    loadChildren: () => import('./pages/staff/staff.module').then( m => m.StaffPageModule)
  },
  {
    path: 'leaverules',
    loadChildren: () => import('./pages/leaverules/leaverules.module').then( m => m.LeaverulesPageModule)
  },
  {
    path: 'home-manager',
    loadChildren: () => import('./home-manager/home-manager.module').then( m => m.HomeManagerPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },  {
    path: 'mukadepan-hod',
    loadChildren: () => import('./pages/mukadepan-hod/mukadepan-hod.module').then( m => m.MukadepanHodPageModule)
  },




  


  
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes,{useHash:true})
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
