import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SharedComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, FormsModule],
  exports: [SharedComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
