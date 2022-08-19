import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomlistComponent } from './roomlist.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RoomlistComponent,
  },
];

@NgModule({
  declarations: [RoomlistComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RoomlistModule {}
