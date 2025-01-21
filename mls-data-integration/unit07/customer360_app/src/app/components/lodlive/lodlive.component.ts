import { Component, Input, OnChanges } from '@angular/core';

/* eslint no-var-requires: 0 */
const lodlive = require('../../../../bower_components/ml-lodlive/dist/ml-lodlive.complete.js');

declare const $: any;

@Component({
  selector: 'dm-lodlive',
  templateUrl: './lodlive.html'
})
export class LodLiveComponent implements OnChanges, Input {
  @Input() public customer: any;
  private display: boolean;

  public ngOnChanges() {
    this.display = false;
    if (this.customer !== undefined) {
      this.display = true;
      $('#lodlive').empty();
      const customerNameWithUnderscore = this.customer.replace(/ /g, '_');
      const MarkLogicProfile = require('./profile');
      setTimeout(() => {
        $('#lodlive').lodlive({
          profile: MarkLogicProfile,
          firstUri: `http://procycling.com/resource/${customerNameWithUnderscore}`,
          ignoreBnodes: true });
      }, 0);
    }
  }
}
