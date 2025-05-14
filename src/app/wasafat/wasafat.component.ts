import { Component } from '@angular/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-wasafat',
  standalone: false,
  templateUrl: './wasafat.component.html',
  styleUrl: './wasafat.component.css'
})
export class WasafatComponent {



  GetConfirmToComeTicketsData:any;



  constructor(public _APIService:APIService ,private _Router:Router ){

    this._APIService.show();


    this._APIService.GetConfirmToComeTickets().subscribe( (x) => {

      console.log(x);
      
      this.GetConfirmToComeTicketsData = x;


    }, (err) => {

      console.log(err);

    } )


    this._APIService.hide();

  }



  confirmSetTicketToFinishPreperation(key: any){

    this._APIService.show();

    this._APIService.SetTicketToFinishPreperation(key).subscribe( (x) => {

      console.log(x);

      // this._Router.navigate(['/wasafat']);



    }, (err) => {

      console.log(err);

    } )


    this._APIService.hide();


  }
  




}
