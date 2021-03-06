import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService:AuthService, private router : Router) {}
  
  logOut(){
    this.authService.logout()
  }
  inputVal = ""
  assignVal(){
    if(/search/.test(location.href)){
      this.authService.searchValSubject.next(this.inputVal)
    }else {
      this.authService.searchVal = this.inputVal
      this.router.navigate(['/search'])
    }
    this.inputVal = ""
  }

  ngOnInit() {
    this.authService.isAuthenticated.subscribe(bool=>{
      this.isAuthenticated = bool;
    })
  }
  isAuthenticated: boolean= false;
  
}
