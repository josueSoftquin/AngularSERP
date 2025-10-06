import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'Portal Datalula';
  isLoggedIn = true;
  isStandalone = false;

  constructor(private http: HttpClient, private readonly router: Router) {}

  ngOnInit() {
    this.isStandalone = this.router.url.indexOf('standalone') >= 0
    setInterval(() => {
      this.loggedIn();
    },1000); 
  }

  loggedIn(){
    if (this.router.url.indexOf("login") == 1 && this.router.url.indexOf("register") == 1){
      this.isLoggedIn = false;
    }
    else{
      this.isLoggedIn = true
    }
  }

}
