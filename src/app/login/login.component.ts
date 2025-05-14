import { Component } from '@angular/core';
import { APIService } from '../api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {





  data: any;
  message:any;
  allData:any;
  checkLogin:any;
  hospitalName = 'اختر المستشفى';
  windowNumber = 'رقم الشباك'
  getHospitalsData:any;
  windowsData:any;
  checkWindowChosed = false;

  



  loginForm = new FormGroup({
    userName: new FormControl('' , [Validators.required , Validators.minLength(3)]),
    password: new FormControl('' , [Validators.required , Validators.minLength(4)]),

  })
  constructor(public _APIService:APIService , private _Router:Router){

    this._APIService.show();

    this._APIService.getHospitals().subscribe( (x) => {

      console.log(x);
      
      this.getHospitalsData = x;


    }, (err) => {

      console.log(err);

    } )



  this.checkLogin = _APIService.checkLogin;

  this._APIService.hide();

}

loginFun(x:any){

  this._APIService.show();


  // console.log(x.value);
  this._APIService.login(this.loginForm.value).subscribe( (x) =>{ 
       console.log(x);

       localStorage.setItem('token', x.token);
       this._APIService.token.next(x.token);
  
       if(x.isAuthenticated){
        this.message = x.message ;
        document.getElementById('alertBtn')?.click();
        this._APIService.checkLogin.next(true);
        this._Router.navigate(['/waiting']);
       }else {
        this.message = x.message ;
        document.getElementById('alertBtn')?.click();
       }
     
       this.allData = x ;
     } , (err) => {
       console.log(err);
     } );

     this._APIService.hide();

}


getWindow(event: any){

  this._APIService.show();

  console.log(event.id);
  this.hospitalName = event.arName;
  this.Windows(event.id);


}

Windows(id:any){



  this._APIService.getWindow(id).subscribe( (x) => {

    console.log(x);
    this.windowsData = x;


  }, (err) => {

    console.log(err);

  } )

  this._APIService.hide();

}

saveWindowId(id:any , window:any){


  this.windowNumber = window;

  this._APIService.window.next(id);
  this.checkWindowChosed = true;



}



}
