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

  
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes,{useHash:true})
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
