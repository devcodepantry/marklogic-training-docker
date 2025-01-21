import { Component, Input, OnChanges } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'dm-support-calls',
  templateUrl: './support-calls.html'
})
export class SupportCallsComponent implements Input, OnChanges {

  @Input() public customer: any;
  private supportCalls: any = [];
  private supportCallsModal: any = [];
  private model: object = {};
  private searching: boolean = false;

  constructor(private http: Http) { }

  public ngOnChanges() {
    if (this.customer !== undefined) {
      this.http.get(`/supportcall/${this.customer}`)
      .map(response => response.json())
      .subscribe(result => {
        this.model['customer'] = 'this';
        this.supportCalls = result;
      });
    }
  }

  public search() {
    if (this.customer !== undefined) {
      this.http.post(`/supportcall/${this.customer}`, this.model)
      .map(response => response.json())
      .subscribe(result => {
        this.model['customer'] = 'this';
        this.searching = true;
        this.model['from'] = undefined;
        this.model['to'] = undefined;
        this.supportCalls = result;
      });
    }
  }

  public searchText() {
    if (this.customer !== undefined) {
      if (this.model['customer'] === 'this') {
        this.http.post(`/supportcall/${this.customer}`, this.model)
        .map(response => response.json())
        .subscribe(result => {
          this.searching = true;
          this.supportCalls = result;
        });
      } else {
        // open modal
        this.http.post(`/supportcall/${this.customer}`, this.model)
        .map(response => response.json())
        .subscribe(result => {
          this.supportCallsModal = result;
        });
      }
    }
  }

  public reset() {
    if (this.customer !== undefined) {
      this.http.get(`/supportcall/${this.customer}`)
      .map(response => response.json())
      .subscribe(result => {
        this.supportCalls = result;
      });
    }
  }
}
