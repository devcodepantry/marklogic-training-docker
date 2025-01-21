// Core
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { ApplicationComponent } from './components/application/application.component';
import { CustomerInfoComponent } from './components/customer-info/customer-info.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { LodLiveComponent } from './components/lodlive/lodlive.component';
import { MarketingContactsComponent } from './components/marketing-contacts/marketing-contacts.component';
import { RecentPurchasesComponent } from './components/recent-purchases/recent-purchases.component';
import { SupportCallsComponent } from './components/support-calls/support-calls.component';

import { PopoverModule } from 'ngx-popover';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    PopoverModule
  ],
  declarations: [
    ApplicationComponent,
    CustomerInfoComponent,
    CustomerListComponent,
    LodLiveComponent,
    SupportCallsComponent,
    RecentPurchasesComponent,
    MarketingContactsComponent
  ],
  bootstrap: [
    ApplicationComponent
  ]
})

export class AppModule { }
