import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  submenuVisibility: { [key: number]: boolean } = {};

  toggleSubmenu(menuIndex: number): void {
    this.submenuVisibility[menuIndex] = !this.submenuVisibility[menuIndex];
  }

  constructor(private router: Router) {}
  redirectToPage(route: string): void {
    this.router.navigate([route]);
  }
}
