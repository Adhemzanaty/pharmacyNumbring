import { Component } from '@angular/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  checkLogin:any;

  constructor(private _APIService:APIService , private _Route:Router) {

    _APIService.checkLogin.subscribe( (x) => {
      this.checkLogin = x;
    } );


    

  }

  logOut(){
    this._APIService.checkLogin.next(false);
    this._Route.navigate(['/login']);    
  }


}
