This is a demo Ionic app for a fake online cafe called INF Café. It consists of a front end with three pages: a Products page, a Basket page, and a Previous Orders
page. It accesses the endpoints found in the product and order controllers of an API to send and receive data from the database
<h1>Products</h1>
The list of all products (including their name, description, and price) are displayed on the page, along with an input for the product quantity. 
This will make use of the “getProductList” API endpoint.
A user can enter the quantity of the product that they would like to add to their basket. Upon
clicking on the basket icon button, the error message “Please enter a quantity above zero” is
displayed if the quantity is less than or equal to zero.
The user can repeat this process for all the products that they would like to add to their
basket.
When the user wants to view their basket, they can make use of tabs to navigate to the Basket
page
<h1>Basket</h1>
This page allows a user to view the contents of their basket (a list of the products that have been
added to the basket) along with the product name, price, and quantity provided for each.
Each product in the list has a delete option, should the user wish to remove it from their basket.
Once the user selects the delete option of a specific product, the product is removed from the
list of products in the basket.
When the user clicks on the checkout button, the list of products in the basket along with their quantities,
is sent to the Previous Orders page through a service
After checking out and sending the list of products in the basket to the service, the
list of products in the basket is cleared (emptied) for the next order to be placed.
A toast alert displays once the checkout process has been completed, stating “Checkout was
completed successfully”.
The user can navigate back and forth between the pages with the list of products
in the basket being persisted until they delete a basket product or checkout
<h1>Previous Orders</h1>
This page allows a user to view all the orders that have been placed, labelled chronologically starting
from 1, as well as displays the date that the order was placed.
Retrieving the list of orders will make use of the service.
This page is for display purposes only and the user is not be able to do anything with the list of
orders, besides view the list and navigate to the different pages using the tabs.
<h1>Screenshots</h1>
<h3>Products</h3>
https://user-images.githubusercontent.com/82672900/167273184-4906e877-9f89-432e-9f34-fd99d545923b.png
<h3>Basket</h3>
https://user-images.githubusercontent.com/82672900/167273181-6fd4ad2a-44b6-4a8a-af95-41264712ae6b.png
<h3>Checkout</h3>
https://user-images.githubusercontent.com/82672900/167273182-9500817c-5541-47b4-9102-13869f93e8f1.png
<h3>Previous Orders</h3>
https://user-images.githubusercontent.com/82672900/167273183-acb07e58-bfa5-4352-bce2-bcaa3e333474.png


