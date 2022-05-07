import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BasketServiceService } from '../basket-service.service';

//Base URL of the API
const API_URL = environment.API_URL;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public http: HttpClient, public BasketServiceService: BasketServiceService) {
    this.getOrders();
  }

  //Array with all the previous orders
  orders: any = [];

  //Function runs upon viewing the page
  ionViewWillEnter(){
    this.getOrders();
  }

  //Retrieves orders from the service
getOrders(){
  this.orders = this.BasketServiceService.orders;
}

}
