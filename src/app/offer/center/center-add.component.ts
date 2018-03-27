import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Center } from './center';
import { CenterService } from './center.service';

@Component({
  templateUrl: './center-add.component.html'
})
export class CenterAddComponent {

  center = {
    name: ''
  };

  constructor(private http: HttpClient, private centerService: CenterService) {
   /*  this.http.get('http://localhost:9000').subscribe(data => this.greeting = data); */
  }

  insertCenter () {
    if (this.center.name === '') { console.log('center.name===\'\''); console.log(this.center.name); return; }
    this.centerService.addCenter( this.center as Center)
       .subscribe(center => {
        console.log('center-added id? ' + center.id);
    });
 }

}
