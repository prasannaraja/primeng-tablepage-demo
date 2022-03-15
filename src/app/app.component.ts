import { Component } from '@angular/core';
import { CustomerService } from './customerservice';
import { Customer } from './customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  customers: Customer[];
  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService
      .getCustomersLarge()
      .then((customers) => (this.customers = customers));
  }
}
