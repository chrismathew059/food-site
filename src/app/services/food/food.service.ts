import { Injectable } from '@angular/core';
import {Food} from '../../shared/models/Food';
import {Tag} from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

getFoodById(id:number):Food{
  return this.getAll().find(food=>food.id==id)!;
}


getAllTags():Tag[]{
  return[
    {Name:'All',Count:10},
    {Name:"Fast Food",Count:3},
    {Name:'Pizza',Count:1},
    {Name:'Sugar',Count:3},
    {Name:'Spicy',Count:3},
    {Name:'Drinks',Count:2}
  ];
}

getAllFoodsByTag(tag:string):Food[]{
  return tag=='All'?this.getAll():this.getAll().filter(food =>food['tags']?.includes(tag))
}
getAll():Food[]{
  return [
    {
      id:101,
      name:"Butter Chicken",
      cookTime:'10-20 mins',
      price:180,
      favorite:false,
      orgins: ['Chinese'],
      stars:4.5,
  imageUrl:'/assets/images/Foods/food-1.jpg',
  tags:['Serves 1','Spicy','Authentic'],
    },


    {
      id:102,
      name:'French Fries',
      cookTime:'30-40 mins',
      price:219,
      favorite:false,
      orgins: ['French'],
      stars:3.25,
  imageUrl:'/assets/images/Foods/food-2.jpg',
  tags:['Serves 1','Fast Food','Crispy'],
    },


    {
      id:103,
      name:'Chicken Biriyani',
      cookTime:'25-30 mins',
      price:120,
      favorite:false,
      orgins: ['Indian'],
      stars:4.35,
  imageUrl: '/assets/images/Foods/food-3.jpg',
  tags:['Serves 1','Lunch'],
    },

    {
      id:104,
      name:'Belgian Truffle',
      cookTime:'10-15 mins',
      price:320,
      favorite:false,
      orgins: ['European'],
      stars:4.8,
  imageUrl: '/assets/images/Foods/food-4.jpg',
  tags:['Serves 1','Fast Food','Sugar'],
    },

    {
      id:105,
      name:"Pepperonni Pizza",
      cookTime:'25-30 mins',
      price:460,
      favorite:false,
      orgins: ['Chinese'],
      stars:4.5,
  imageUrl:'/assets/images/Foods/food-5.jpg',
  tags:['Serves 2','Pizza','Authentic'],
    },
    {
      id:106,
      name:"Strawberry Shake",
      cookTime:'10-12 mins',
      price:460,
      favorite:false,
      orgins: ['Asia'],
      stars:4.5,
  imageUrl:'/assets/images/Foods/food-6.jpg',
  tags:['Serves 1','Sugar','Drinks'],
},
{
  id:107,
  name:"Broasted Chicken",
  cookTime:'20-25 mins',
  price:540,
  favorite:false,
  orgins: ['European'],
  stars:4.5,
imageUrl:'/assets/images/Foods/food-7.jpg',
tags:['Serves 1','Fast Food','Spicy','Broasted'],
},

{
  id:108,
  name:"Green Apple Mojito",
  cookTime:'10-15 mins',
  price:120,
  favorite:false,
  orgins: ['Asian'],
  stars:4.5,
imageUrl:'/assets/images/Foods/food-8.jpg',
tags:['Serves 1','Drinks'],
},

{
  id:109,
  name:"Penne Alfredo Pasta",
  cookTime:'10-12 mins',
  price:220,
  favorite:false,
  orgins: ['Chinese'],
  stars:4.5,
imageUrl:'/assets/images/Foods/food-9.jpg',
tags:['Serves 1','Spicy','Pasta'],
},

{
  id:110,
  name:"Chicken Wings",
  cookTime:'20-25 mins',
  price:180,
  favorite:false,
  orgins: ['European'],
  stars:4.5,
imageUrl:'/assets/images/Foods/food-10.jpg',
tags:['Serves 1','Broasted'],
},








    
  ]

}


}
