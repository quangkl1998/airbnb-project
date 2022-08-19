import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'roomdetail/:id',
    loadChildren: () =>
      import('./roomdetail/roomdetail.module').then((m) => m.RoomdetailModule),
  },
  {
    path: 'roomlist',
    loadChildren: () =>
      import('./roomlist/roomlist.module').then((m) => m.RoomlistModule),
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
