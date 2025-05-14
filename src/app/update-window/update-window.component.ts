import { Component } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-update-window',
  standalone: false,
  templateUrl: './update-window.component.html',
  styleUrl: './update-window.component.css'
})
export class UpdateWindowComponent {


  hospitals: any;
  hospitalName = 'اختر المستشفى';
  windowsData:any;

  constructor(public  _APIService:APIService){

    this._APIService.show();


    this._APIService.getHospitals().subscribe( (x) => {

      console.log(x);
      this.hospitals = x;
    }, (err) => {

      console.log(err);
    } )

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


  updateWindows(obj:any){

    this._APIService.show();

    obj.isActive = !obj.isActive;  


    this._APIService.updateWindow([obj] ).subscribe( (x) => {

      console.log(x);
      

      this.Windows(obj.hospitalId);

    }, (err) => {

      console.log(err);

    } )

    this._APIService.hide();



  }

}
