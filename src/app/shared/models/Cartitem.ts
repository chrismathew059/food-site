import { Food } from "./Food";

export class Cartitem{
     constructor(food:Food,quantity:number){
          this.food=food;
          this.quantity=quantity;
     }
     food:Food;
     quantity:number;

     get price():number{
          return this.food.price*this.quantity;
     }
}