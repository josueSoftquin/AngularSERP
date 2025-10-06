import { Component } from '@angular/core';
import { SidebarService } from '../../../core/services/sidebar.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  userName = "";

  constructor(
    private readonly sidebarService: SidebarService,
    private readonly router: Router,
    private readonly snackBar: MatSnackBar
  ){}

  toggleSidebar(){
    this.sidebarService.toggleSidebar();
  }

  openEditDialog(): void {
    console.log("dialog edit user was opened");
  }

  logout(): void{
    console.log("Logout");
    this.router.navigate(['/login']);
  }
}
