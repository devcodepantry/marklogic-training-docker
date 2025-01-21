import { Component, Input, OnChanges } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'dm-marketing-contacts',
  templateUrl: './marketing-contacts.html'
})
export class MarketingContactsComponent implements Input, OnChanges {

  @Input() public customer: any;
  private marketingContacts: any = [];

  constructor(private http: Http) { }

  public ngOnChanges() {
    if (this.customer !== undefined) {
      this.http.get(`/marketingcontact/${this.customer}`)
      .map(response => response.json())
      .subscribe(result => {
        this.marketingContacts = result;
      });
    }
  }
}
