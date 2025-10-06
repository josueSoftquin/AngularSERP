import { Component } from '@angular/core';
import { SidebarService } from '../../core/services/sidebar.service';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  isSidebarVisible = true;
  constructor( private sidebarService: SidebarService){}

  ngOnInit(){
    this.sidebarService.sidebarVisibility$.subscribe((isVisible) => {
      this.isSidebarVisible = isVisible;
    });
  }

  loggedIn():boolean{
    return true;
  }
}
