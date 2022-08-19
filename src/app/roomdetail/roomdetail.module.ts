import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomdetailComponent } from './roomdetail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RoomdetailComponent,
  },
];

@NgModule({
  declarations: [RoomdetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RoomdetailModule {}
