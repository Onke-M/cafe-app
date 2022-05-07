import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastController } from '@ionic/angular'
import { BasketServiceService } from '../basket-service.service';

//API's base URL is found in the environment file
const API_URL = environment.API_URL;

//Variables used within the tab
let keys: any;
let length: any;
let deleteIndex: number;
let today: any;
let orderId: number = 1;
let previousOrders: any = [];

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public httpClient: HttpClient, public BasketServiceService: BasketServiceService, public toastController: ToastController) {
  }
  //Array of products in the basket 
  basketProducts:any = [];
  ngOnInit() 
  {
  }
  //Method used to run the function every time the tab is viewed
  ionViewWillEnter(){
    this.loadData();
  }

  //Function to delete products from the basket
  deleteBasketProduct(data){
    deleteIndex = this.basketProducts.indexOf(data);
    this.basketProducts.splice(deleteIndex, 1);
  }

  //Function used to load the products added to the basket through the Service
  loadData()
  {
    this.basketProducts = this.BasketServiceService.basket;
    //Used to find the length of the object because "".length" does not work
    if (this.basketProducts != undefined)
    {
      keys = Object.keys(this.basketProducts);
      length = keys.length;
    }
  }
  //Function used to clear the basket
  checkout(){
    if (this.basketProducts != undefined)
    {
      this.basketProducts.length = 0;

      //Toast 
      this.toastController.create(
      {
          message: 'Checkout was completed successfully',
          position: 'top',
          cssClass: 'toast-custom-class',
          buttons: [{
              side: 'end',
              text: 'Close',
              role: 'cancel',
              handler: () => {
                console.log('');
              }
            }]
          }).then((toast) => {
            toast.present();
          });

           //The date of the order
      today = new Date();
      previousOrders.unshift({
        "OrderID" : orderId,
        "Date" : today,
      });
        //Final order array that'll be passed to the Previous Orders page through a Service
        previousOrders.reverse();
        orderId++;
        this.BasketServiceService.orders = previousOrders;
      }
    }
  }
