import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BasketServiceService } from '../basket-service.service';
import { ToastController } from '@ionic/angular'

//API's base URL is found in the environment file
const API_URL = environment.API_URL;
let orderLines:any = [];
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //products array to store the results from the API
  products: any = [];

  //Uses http to retrieve the data from the API then stores it in an array of objects called "products"
  getProductList(){
    this.http.get(`${API_URL}/product/getProductList`)
    .subscribe(results => {
      this.products = results;
    })
  }

  //Function to retrieve the product's name, price and the quantity chosen. The information is stored in
  //in another array to pass to the Basket page
  //unshift and reverse is used to keep the original order as the user selects products
  getOrderLine(data, val:number){
    if (val <= 0)
    {
      this.toastController.create({
        message: 'Please enter a quantity above zero',
        position: 'top',
        cssClass: 'toast-custom-class',
        buttons: [{
            side: 'end',
            text: 'Close',
            role: 'cancel',
            handler: () => {
              console.log('');
            }
          }
        ]
      }).then((toast) => {
        toast.present();
      });
    }
    else
  orderLines.unshift({
  "Name" : data.productName,
  "Price" : data.productPrice,
  "Quantity" : val});

  //Final order array that'll be passed to the Basket page through a Service
  orderLines.reverse();
  this.BasketServiceService.basket = orderLines;
  }
  
  constructor(public http: HttpClient, private BasketServiceService: BasketServiceService, public toastController: ToastController) {
    //Function runs on load to get the data from the API
    this.getProductList();
  }
}


