import { Component, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'dm-customer-list',
  templateUrl: './customer-list.html'
})
export class CustomerListComponent implements OnInit, Input {
  public customers: any = [];

  constructor(private http: Http) { }

  public ngOnInit() {
    this.http.get('/factsheet/all')
    .map(response => response.json())
    .subscribe(result => this.customers = result);
  }
}
