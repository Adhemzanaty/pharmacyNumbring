import { Component, inject } from '@angular/core';
import { APIService } from '../api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  

  data: any;
  message:any;
  allData:any;
  checkLogin:any;

  registerForm = new FormGroup({
    name: new FormControl('' , [Validators.required , Validators.minLength(3)]),
    userName: new FormControl('' , [Validators.required , Validators.minLength(3)]),
    roleName: new FormControl('' , [Validators.required , Validators.minLength(3)]),
    password: new FormControl('' , [Validators.required , Validators.minLength(4)]),

  })
  constructor(public _APIService:APIService , private _Router:Router){


  this.checkLogin = _APIService.checkLogin;


}

registerFun(x:any){

  this._APIService.show();


  console.log(x.value);
  this._APIService.Register(this.registerForm.value).subscribe( (x) =>{ 
       console.log(x);

       localStorage.setItem('token' , x.token)

       if(x.isAuthenticated){
        this.message = x.message ;
        document.getElementById('alertBtn')?.click();
        // this._APIService.checkLogin.next(true);
        this._Router.navigate(['/login']);
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

}
