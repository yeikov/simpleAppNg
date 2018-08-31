import { Component, OnInit } from '@angular/core';
import { Center } from './center';
import { CenterService } from './center.service';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './centers.component.html'
})

export class CentersComponent implements OnInit {
  title = 'Centers list';
  list: Center[];
  // center = {id: 1, name: 'A'};

  constructor(private service: CenterService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.service.getCenters()
    .subscribe(centers => this.list = centers);
  }

}
