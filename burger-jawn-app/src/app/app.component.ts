import { Component, Input } from '@angular/core';
import { Button } from 'protractor';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
  
})
export class AppComponent {
  title = 'Burger Jawn!';
  totalPrice = 0;
  foodMenu = [{
    'image': 'https://assets.stickpng.com/images/585abfdf4f6ae202fedf2936.png',
    'item': 'Fries',
    'description': 'Description: Oily, salty, and hot',
    'comment': 'Youll love our fries',
    'price': 50.00,
    'inCart': 0,
    'quantity': 0,
    'special': true
},
{
  'image': 'https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=895%2C895',
  'item': 'Burgers',
  'description': 'Description: Beefy, fresh, & hot',
  'comment': 'Youll love our burgers',
  'price': 10.00,
  'quantity': 0,
  'special': false
},
{
  'image': 'https://www.jing.fm/clipimg/full/195-1952265_coca-cola-can-png-image-transparent-background-soda.png',
  'item': 'Soda',
  'description': 'Description: Sweeter than water',
  'comment': 'Youll love our soda',
  'price': 30.00,
  'quantity': 0,
  'special': false
  

}

]

totalItems(){
  let items = 0;
  for(let item of this.foodMenu){
    items += item.quantity;
  }
  return items;
}

inc(foodItem){
  foodItem.quantity++;
  this.totalPrice += foodItem.price;

}

dec(foodItem){
  if (foodItem.quantity != 0){
    foodItem.quantity--;
    this.totalPrice -= foodItem.price;
  } 
  
  
};
  
 
}
