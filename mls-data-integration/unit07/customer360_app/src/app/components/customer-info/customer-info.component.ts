import { Component, Input, OnChanges } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'dm-customer-info',
  templateUrl: './customer-info.html'
})
export class CustomerInfoComponent implements OnChanges, Input {
  @Input() public customer: any;
  public customerInfo: any;

  constructor(private http: Http) { }

  public ngOnChanges() {
    if (this.customer !== undefined) {
      const customerName = this.customer.split(' ').join('').toLowerCase();
      this.http.get(`/factsheet/${customerName}`)
      .map(response => response.json())
      .subscribe(result => this.customerInfo = result);
    }
  }
}
