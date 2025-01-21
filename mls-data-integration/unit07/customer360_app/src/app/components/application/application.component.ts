import { Component } from '@angular/core';

@Component({
  selector: 'data-model',
  templateUrl: './application.html',
  // styleUrls: ['./application.css']
  styles: [require('./application.css')]
})

export class ApplicationComponent {
  private selectedCustomer: any;
  public changeValue(event: any) {
    this.selectedCustomer = event;
  }
}
