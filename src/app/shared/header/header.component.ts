import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationService } from 'src/app/core/services/location.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('headerRef') headerRef!: ElementRef<HTMLDivElement>;

  locations$: Observable<any> | null = null;

  handleClick = (event: any) => {
    if (this.headerRef && this.headerRef.nativeElement.contains(event.target)) {
      this.closeDatePicker();
    }
  };

  constructor(private locationService: LocationService) {
    document.addEventListener('click', this.handleClick);
  }

  ngOnInit(): void {
    this.locations$ = this.locationService.getLocation();
    this.locations$.subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (e) => {
        console.log(e.error);
      },
    });
  }

  showMenu = false;
  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }

  inputFocus = false;

  openDatePicker() {
    this.inputFocus = !this.inputFocus;
  }
  closeDatePicker() {
    this.inputFocus = !this.inputFocus;
  }

  isActiveLocation = false;
  isActiveCheckIn = false;
  isActiveCheckOut = false;
  isActiveGuest = false;
  ngOnDetroy(): void {
    document.removeEventListener('click', this.handleClick);
  }
}
