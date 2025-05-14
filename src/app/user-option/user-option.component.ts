import { Component } from '@angular/core';
import { APIService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-option',
  standalone: false,
  templateUrl: './user-option.component.html',
  styleUrl: './user-option.component.css'
})
export class UserOptionComponent {


  GetTicketInormationData:any;
  key:any;

  constructor(public  _APIService:APIService , private _ActivatedRoute:ActivatedRoute){

    this._APIService.show();


    this.key = _ActivatedRoute.snapshot.params['key'];


    this._APIService.GetTicketInormation( this.key ).subscribe( (x) => {

      console.log(x);
      
      this.GetTicketInormationData = x;


    }, (err) => {

      console.log(err);

    } )


    this._APIService.hide();


  }



  ConfirmToAttend(){

    this._APIService.show();

    this._APIService.ConfirmToAttend( this.key ).subscribe( (x) => {

      console.log(x);
      
      // this.GetTicketInormationData = x;


    }, (err) => {

      console.log(err);

    } )


    this._APIService.hide();

  }



  ConfirmSPL(){

    this._APIService.show();

    this._APIService.ConfirmSPL( this.key ).subscribe( (x) => {

      console.log(x);
      
      // this.GetTicketInormationData = x;


    }, (err) => {

      console.log(err);

    } )


    this._APIService.hide();

  }


  ConfirmNoNeed(){

    this._APIService.show();

    this._APIService.ConfirmNoNeed( this.key).subscribe( (x) => {

      console.log(x);
      
      // this.GetTicketInormationData = x;


    }, (err) => {

      console.log(err);

    } )


    this._APIService.hide();

  }


}
