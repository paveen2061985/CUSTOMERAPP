import { Component} from '@angular/core';
import { Customer } from '../model/Customer';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent  {

  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();
  addCustomer(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();
  }
}
