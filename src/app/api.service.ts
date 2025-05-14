import { Inject, Injectable } from '@angular/core';
import { HttpClientModule , HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { subscribe } from 'diagnostics_channel';



@Injectable({
  providedIn: 'root'
})
export class APIService {

  
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  show() {
    this.loadingSubject.next(true);
    document.body.style.overflow = 'hidden'; //  يمنع السكروول
  
  }

  hide() {
    this.loadingSubject.next(false);
    document.body.style.overflow = 'auto'; //  يرجع السكروول
  }





  apiLink = 'http://10.1.7.247:7077/api/';


  checkLogin = new BehaviorSubject(false);
  window = new BehaviorSubject(1);
  token = new BehaviorSubject('');
  Dwindow:any;

  ourToken:string | undefined;
  header = {'content-type':'application/json','Accept':'application/json','Authorization':`Bearer `};

  constructor(private _httpClient:HttpClient) { 

    this.token.subscribe( (x) => {
    
      this.ourToken = x;
      this.header = {'content-type':'application/json','Accept':'application/json','Authorization':`Bearer ${this.ourToken}`};

    } )

    this.window.subscribe( (x) => {
    
      this.Dwindow = x;

    } )

  }





  



  Register(data:any):Observable<any>{

    let res = this._httpClient.post( this.apiLink+'auth/Register' , data );

    return res;

  }

  login(data:any):Observable<any>{

    let res = this._httpClient.post( this.apiLink+'auth/Login' , data);

    return res;

  }


  getHospitals():Observable<any>{


    let res = this._httpClient.get( this.apiLink+'LookUps/GetHospitals' , {headers: this.header});

    return res;

  }



  getWindow(id: any ):Observable<any>{


    let res = this._httpClient.get( this.apiLink+`LookUps/GetWindowsByHospitalId/${id}` , {headers: this.header});

    return res;

  }


  updateWindow(arr: any ):Observable<any>{


    let res = this._httpClient.post( this.apiLink+`LookUps/UpdateWindows`, arr , {headers: this.header});

    return res;

  }


  GetCurrentTicket():Observable<any>{


    let res = this._httpClient.get( this.apiLink+`ticket/GetCurrentTicket/${this.Dwindow}` , {headers: this.header});

    return res;

  }


  GetWaitingTickets():Observable<any>{


    let res = this._httpClient.get( this.apiLink+`ticket/GetWaitingTickets/${this.Dwindow}` , {headers: this.header});

    return res;

  }


  GetFinishedTickets():Observable<any>{


    let res = this._httpClient.get( this.apiLink+`ticket/GetFinishedTickets/${this.Dwindow}` , {headers: this.header});

    return res;

  }



  GetConfirmToComeTickets():Observable<any>{


    let res = this._httpClient.get( this.apiLink+`ticket/GetConfirmToComeTickets` , {headers: this.header});

    return res;

  }


  SetTicketToFinishPreperation(Key:any ):Observable<any>{


    let res = this._httpClient.get( this.apiLink+`ticket/SetTicketToFinishPreperation/${Key}` , {headers: this.header});

    return res;

  }



  GetTicketInormation(Key:any ):Observable<any>{


    let res = this._httpClient.get( this.apiLink+`Ticket/GetTicketInormation/${Key}` , {headers: this.header});

    return res;

  }



  ConfirmToAttend(Key:any ):Observable<any>{


    let res = this._httpClient.get( this.apiLink+`Ticket/ConfirmToAttend/${Key}` , {headers: this.header});

    return res;

  }


  ConfirmSPL(Key:any ,):Observable<any>{


    let res = this._httpClient.get( this.apiLink+`Ticket/ConfirmSPL/${Key}` , {headers: this.header});

    return res;

  }


  ConfirmNoNeed(Key:any ):Observable<any>{


    let res = this._httpClient.get( this.apiLink+`Ticket/ConfirmNoNeed/${Key}` , {headers: this.header});

    return res;

  }



  CallPatient(Key:any ):Observable<any>{


    let res = this._httpClient.get( this.apiLink+`Ticket/CallPatient/${Key}` , {headers: this.header});

    return res;

  }



  GetTicketsByScreenId(id:any ):Observable<any>{


    let res = this._httpClient.get( this.apiLink+`Ticket/GetTicketsByScreenId/${id}` , {headers: this.header});

    return res;

  }


  GetNextPatient():Observable<any>{


    let res = this._httpClient.get( this.apiLink+`Ticket/GetNextPatient/${this.Dwindow}` , {headers: this.header});

    return res;

  }



}
