import { Component, Input, OnChanges } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'dm-recent-purchases',
  templateUrl: './recent-purchases.html'
})
export class RecentPurchasesComponent implements Input, OnChanges {

  @Input() public customer: any;
  private recentPurchases: any = [];
  private model: object = {};
  private total: number;

  constructor(private http: Http) { }

  public ngOnChanges() {
    if (this.customer !== undefined) {
      this.total = undefined;
      this.model['from'] = undefined;
      this.model['to'] = undefined;
      this.http.get(`/recentpurchase/${this.customer}`)
      .map(response => response.json())
      .subscribe(result => {
        this.recentPurchases = result;
      });
    }
  }

  public search() {
    if (this.customer !== undefined) {
      this.http.post(`/recentpurchase/${this.customer}`, this.model)
      .map(response => response.json())
      .subscribe(result => {
        const totals = result.map((items: any) => items.total);
        this.total = totals.reduce((acc: any, val: any) => acc + val, 0);
        this.recentPurchases = result;
      });
    }
  }

  public reset() {
    if (this.customer !== undefined) {
      this.http.get(`/recentpurchase/${this.customer}`)
      .map(response => response.json())
      .subscribe(result => {
        this.recentPurchases = result;
      });
    }
  }

}
