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
  },  {
    path: 'cal-modal',
    loadChildren: () => import('./pages/cal-modal/cal-modal.module').then( m => m.CalModalPageModule)
  },
  {
    path: 'leave',
    loadChildren: () => import('./pages/leave/leave.module').then( m => m.LeavePageModule)
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
