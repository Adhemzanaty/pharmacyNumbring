import { Component } from '@angular/core';
import { APIService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { interval, Observable } from 'rxjs';


@Component({
  selector: 'app-tickets',
  standalone: false,
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {


  GetTicketsByScreenIdData:any;
  showClass = false;

  constructor(public _APIService:APIService , private _ActivatedRoute:ActivatedRoute ){

    this._APIService.show();


    let window = _ActivatedRoute.snapshot.params['window'];

    this. sholdShowClass("2025-05-06T15:15:58.6786553");

    this._APIService.GetTicketsByScreenId( window ).subscribe( (x) => {


      console.log(x);

      this.GetTicketsByScreenIdData = x;


    }, (err) => {

      console.log(err);

    } )

    interval(10000).subscribe(x => {


      console.log("update")

      this._APIService.GetTicketsByScreenId( window ).subscribe( (x) => {


        // console.log(x);

        this.GetTicketsByScreenIdData = x;
  
  
      }, (err) => {
  
        console.log(err);
  
      } )
  });

    




    this._APIService.hide();

  }

  playAudio(){
    let audio = new Audio();
    audio.src = "../../assets/ticket-notify.mp3";
    audio.load();
    audio.play();
  }

  sholdShowClass(x:any){
    const cleanDateString = x.split('.')[0]; // أو ممكن تستخدم slice
        const targetDate = new Date(cleanDateString);
        const now = new Date();
        const diffInSeconds = Math.abs((now.getTime() - targetDate.getTime()) / 1000);
        this.showClass = diffInSeconds >= 1 && diffInSeconds <= 20;

        if(diffInSeconds >= 1 && diffInSeconds <= 20){

          this.playAudio();

        }


        return diffInSeconds >= 1 && diffInSeconds <= 20 ;
  }




}
