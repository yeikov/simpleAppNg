import { Component, OnInit } from '@angular/core';
import { Center } from './center';
import { CenterService } from './center.service';
import { HttpClient } from '@angular/common/http';


@Component({
  templateUrl: './center.component.html'
})

export class CenterComponent implements OnInit {

  title = 'User';
  center = []; // {id: 1, name: 'A'};

  constructor(private centerService: CenterService) { }

  ngOnInit() {
    const n = 1;
    this.getObj(n);
  }

  getObj(id): void {
    this.centerService.getObj(id)
    .subscribe(obj => this.center = obj);
  }

}
