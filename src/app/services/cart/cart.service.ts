import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { Cartitem } from 'src/app/shared/models/Cartitem';
import{ Food} from 'src/app/shared/models/Food'
Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart= new Cart();
  constructor() { }

  addtoCart(food:Food):void{
     let cartItem=this.cart.items.find(item=>item.food.id === food.id)
     if(cartItem){
      this.changeQuantity(food.id,cartItem.quantity+1);
      return;
     }
     this.cart.items.push(new Cartitem(food));
  } 
  
 removeFromCart(foodId:number):void{
       this.cart.items=this.cart.items.filter(items=>items.food.id!=foodId);
 }
changeQuantity(foodId:number,Quantity:number){
   let cartItem=this.cart.items.find(item=>item.food.id===foodId);
   if(!cartItem) return;
   cartItem.quantity= Quantity;
   

}
getCart(){
  return this.cart;
}

}
