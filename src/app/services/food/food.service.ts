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
    {Name:'All',Count:15},
    {Name:"Fast Food",Count:5},
    {Name:'Pizza',Count:2},
    {Name:'Lunch',Count:5},
    {Name:'Spicy',Count:6}
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
    }
    
  ]

}


}
