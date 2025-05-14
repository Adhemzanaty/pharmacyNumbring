import { Component } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-waiting-patient',
  standalone: false,
  templateUrl: './waiting-patient.component.html',
  styleUrl: './waiting-patient.component.css'
})
export class WaitingPatientComponent {



  GetCurrentTicketDatat:any;
  GetWaitingTicketsData:any;
  GetFinishedTicketsData:any;


  constructor(public  _APIService:APIService ){

    this._APIService.show();

    this._APIService.GetCurrentTicket(  ).subscribe( (x) => {

      console.log(x);
      
      this.GetCurrentTicketDatat = x;


    }, (err) => {

      console.log(err);

    } )


    this._APIService.GetWaitingTickets(  ).subscribe( (x) => {

      console.log(x);
      
      this.GetWaitingTicketsData = x;


    }, (err) => {

      console.log(err);

    } )



    this._APIService.GetFinishedTickets(  ).subscribe( (x) => {

      console.log(x);
      
      this.GetFinishedTicketsData = x;


    }, (err) => {

      console.log(err);

    } )


    this._APIService.hide();


  }


  GetCurrentTicket(){
   
    this._APIService.show();

    this._APIService.GetCurrentTicket(  ).subscribe( (x) => {

      console.log(x);
      
      this.GetCurrentTicketDatat = x;


    }, (err) => {

      console.log(err);

    } )


    this._APIService.GetWaitingTickets(  ).subscribe( (x) => {

      console.log(x);
      
      this.GetWaitingTicketsData = x;


    }, (err) => {

      console.log(err);

    } )



    this._APIService.GetFinishedTickets(  ).subscribe( (x) => {

      console.log(x);
      
      this.GetFinishedTicketsData = x;


    }, (err) => {

      console.log(err);

    } )

    this._APIService.hide();

  }

  CallPatient(key:any , window:any){

    this._APIService.show();

    this._APIService.CallPatient( key).subscribe( (x) => {

      console.log(x);
      
      this.GetCurrentTicket();


    }, (err) => {

      console.log(err);

    } )


    this._APIService.hide();

  }

  
  GetNextPatient(window:any){

    this._APIService.show();

    this._APIService.GetNextPatient().subscribe( (x) => {

      console.log(x);
      
      this.GetCurrentTicket();


    }, (err) => {

      console.log(err);

    } )


    this._APIService.hide();

  }

}
